$(function () {
    
    var catHeading = $('.cat-imgs h2');
    var catImg = $('.cat-switcher');
    var catClicks = $('.updateCounter');

    $('#cats-form input').change(function () {

        var currentCat = $('input[name=cats]:checked').val();

        switch (currentCat) {
            case 'Cat 1':
                imgURL = 'imgs/cats-1.jpeg';
                catName = 'Cat 1';
                break;
            case 'Cat 2':
                imgURL = 'imgs/cats-2.jpeg';
                catName = 'Cat 2';
                break;
            case 'Cat 3':
                imgURL = 'imgs/cats-3.jpeg';
                catName = 'Cat 3';
                break;
            case 'Cat 4':
                imgURL = 'imgs/cats-4.jpeg';
                catName = 'Cat 4';
                break;
            case 'Cat 5':
                imgURL = 'imgs/cats-5.jpeg';
                catName = 'Cat 5';
                break;
            default: 
                imgURL = 'imgs/cats-1.jpeg';
                catName = 'Cat 1';

                console.log(currentCat);
                
        }

        catImg.attr('src', imgURL);
        catHeading.text(catName);
        catClicks.text(clicks);

        console.log(clicks);

    });

    
});



