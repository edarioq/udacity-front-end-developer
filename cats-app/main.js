$(function () {

    // Get current cat
    $('#cats-form input').change(function () {
        var chosenCat = $('input[name=cats]:checked').val();

        var name1 = 'Cat 1';
        var name2 = 'Cat 2';
        var name3 = 'Cat 3';
        var name4 = 'Cat 4';
        var name5 = 'Cat 5';

        // Update image and title based on current cat
        switch (chosenCat) {
            case 'Cat 1':
                imgURL = 'imgs/cats-1.jpeg';
                catName = name1;
                break;
            case 'Cat 2':
                imgURL = 'imgs/cats-2.jpeg';
                catName = name2;
                break;
            case 'Cat 3':
                imgURL = 'imgs/cats-3.jpeg';
                catName = name3;
                break;
            case 'Cat 4':
                imgURL = 'imgs/cats-4.jpeg';
                catName = name4;
                break;
            case 'Cat 5':
                imgURL = 'imgs/cats-5.jpeg';
                catName = name5;
                break;
            default: 
                imgURL = 'imgs/cats-1.jpeg';
                catname = name1;
        }
        $('.cat-switcher').attr('src', imgURL);
        $('.cat-imgs h2').text(catName);
        clickCounter = 0;
        $(updateCounter).text('0');
    });

    var clickCounter = 0;
    var updateCounter = $('.updateCounter');

    $('.cat-switcher').click(function () {
        clickCounter++;
        updateCounter.text(clickCounter);
    });

});



