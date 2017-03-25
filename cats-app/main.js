$(function () {
    
    var catHeading = $('.cat-imgs h2');
    var catImg = $('.cat-switcher');
    var catClicks = $('.updateCounter');

    var clickCounter1 = 0;
    var clickCounter2 = 0;
    var clickCounter3 = 0;
    var clickCounter4 = 0;
    var clickCounter5 = 0;

    $('#cats-form input').change(function () {

        // Get current cat
        var currentCat = $('input[name=cats]:checked').val();

        // Model - Update image and title based on current cat
        switch (currentCat) {
            case 'Cat 1':
                imgURL = 'imgs/cats-1.jpeg';
                catName = 'Cat 1';
                clicks = clickCounter1++;
                break;
            case 'Cat 2':
                imgURL = 'imgs/cats-2.jpeg';
                catName = 'Cat 2';
                clicks = clickCounter2++;
                break;
            case 'Cat 3':
                imgURL = 'imgs/cats-3.jpeg';
                catName = 'Cat 3';
                clicks = clickCounter3++;
                break;
            case 'Cat 4':
                imgURL = 'imgs/cats-4.jpeg';
                catName = 'Cat 4';
                clicks = clickCounter4++;
                break;
            case 'Cat 5':
                imgURL = 'imgs/cats-5.jpeg';
                catName = 'Cat 5';
                clicks = clickCounter5++;
                break;
            default: 
                imgURL = 'imgs/cats-1.jpeg';
                catName = 'Cat 1';
                clicks = clickCounter1++;

                console.log(currentCat);
                
        }

        catImg.attr('src', imgURL);
        catHeading.text(catName);
        catClicks.text(clicks);

        console.log(clicks);

    });

    
});



