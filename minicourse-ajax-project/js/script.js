function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // API Key a8fe746525334fa8bfbd9779d7539a9c
    var URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=a8fe746525334fa8bfbd9779d7539a9c";

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // Place streetview background on submit
    var street = $('#street').val();
    var city = $('#city').val();

    if (street != null && city != null) {
        $greeting.text('So, you want to live in ' + city + '?');
        $('.bgimg').attr('src', function () {
            return 'http://maps.googleapis.com/maps/api/streetview?size=600x300&location=' + street + city;
        });
    }

    // Make an AJAX request to the NY Times and display articles
    $.getJSON( URL, function( data ) {

        var items = data.response.docs;
        
        for (i = 0; i < items.length; i++ ) {

            var headlines = items[i].headline.main;
            var snippets = items[i].snippet;

            $('#nytimes-articles').append('<li>' + '<h4>' + headlines + '</h4>' + snippets + '</li>');
          
        }


    }).fail(function (err) {
        console.log('Oops! Something broke...');
         $('#nytimes-articles').append('<h2>Error...</h2>');
        throw err;
    });

    return false;

};

$('#form-container').submit(loadData);