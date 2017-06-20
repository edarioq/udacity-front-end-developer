// This is the second attempt with MVC

/*
 * Model
 */

var catData = {
    currentCat: null,
    cats: [
        {
            name: 'Cat 1',
            imgURL: 'imgs/cats-1.jpeg',
            clicks: 0,
        },
        {
            name: 'Cat 2',
            imgURL: 'imgs/cats-2.jpeg',
            clicks: 0,
        },
        {
            name: 'Cat 3',
            imgURL: 'imgs/cats-3.jpeg',
            clicks: 0,
        },
        {
            name: 'Cat 4',
            imgURL: 'imgs/cats-4.jpeg',
            clicks: 0,
        },
        {
            name: 'Cat 5',
            imgURL: 'imgs/cats-5.jpeg',
            clicks: 0,
        },
    ]
}


/*
 * View
 */

var view = {

    loadCats: function () {

        var catForm = document.getElementById('cats-form');
        var catImage = document.getElementById('cat-pic');

        for (i = 0; i < catData.cats.length; i++) {

            var radioInput = document.createElement('input');

            radioInput.setAttribute('type', 'radio');
            radioInput.setAttribute('name', 'cats');
            radioInput.setAttribute('value', catData.cats[i].name);

            catForm.appendChild(radioInput);

            radioInput.insertAdjacentHTML('afterend', '<label>' + catData.cats[i].name + '</label><br />');
            
            
        }

        
    }
}

view.loadCats();


/*
 * Controller
 */

var controller = {


    // Switch Cats
    switchCats: function () {

        var catImage = document.getElementById('cat-pic');

        var inputFields = document.querySelectorAll('#cats-form input[type=radio]');

        // Loop through all input fields
        for (i = 0; i < inputFields.length; i++) {

            // Set first radio input to checked
            inputFields[0].setAttribute('checked', '');

            // Update cat name
            inputFields[i].addEventListener('click', function() {
                document.getElementById('cat-name').innerHTML = this.value;
                
                

                // Check for the FORM RADIO BTN index and match it with the ARRAY index
                for (k = 0; k < catData.cats.length; k++) {
                   console.log('i is ' + i + ' and k is ' + k);

                   catImage.setAttribute('src', catData.cats[k].imgURL);
                }
                
            });
            

        }
        
    },

}


controller.switchCats();


