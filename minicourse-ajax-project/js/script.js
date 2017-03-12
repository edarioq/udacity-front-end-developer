
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    var streetViewURL = '<img class="bgimg" src="http://maps.googleapis.com/maps/api/streetview?size=600x300&location=">';
    
    $body.append(streetViewURL);

    // YOUR CODE GOES HERE!
    var street = $('#street').val();
    var city = $('#city').val();

    if (street != null && city != null) {
        $('.bgimg').attr('src', function () {
            return 'http://maps.googleapis.com/maps/api/streetview?size=600x300&location=' + street + city;
        });
    }

    return false;

    // API Key a8fe746525334fa8bfbd9779d7539a9c

    var apiKeyUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    apiKeyUrl += '?' + $.param({
        'api-key': "a8fe746525334fa8bfbd9779d7539a9c"
    });

    $.getJSON( apiKeyUrl, function( data ) {
        var items = [];
        
        $.each( data, function( key, val ) {
            items.push( "<li id='" + key + "'>" + val + "</li>" );
        });

        console.log(items);

    });

/*    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': "a8fe746525334fa8bfbd9779d7539a9c"
    });
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function (result) {
        console.log(result);
    }).fail(function (err) {
        throw err;
    });*/

};

$('#form-container').submit(loadData);
