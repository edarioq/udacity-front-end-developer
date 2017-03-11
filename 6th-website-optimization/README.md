# How to Run

To run locally, CD to root folder and use `npm install` to install dependencies, then `gulp` to fire up the local server. Click on the respective links
for either Website Optimization Part 1 or Website Optimization Part 2.

# Part 1: Optimize index.html

## Following are the steps I took to reach a pagespeed score of 90 or higher:

1. Inline all the CSS (in the head tag)
2. Moved all JS to the bottom of the page
2. Optimize all images with imagemagick
3. Removed the Google Font call in the head tag and instead called it via JS at the bottom of the page
4. Also added a cache control meta tag in the head, but I did not see much improvement...
5. Added an htaccess file with cache, and gzip control.
6. Added async to JS files (GA and Webfont Loader)
7. Added width and height    to three images

# Part 2: Optimize pizza.html

## Following are the steps I took to reach 60 FPS

1. Since the moving pizzas show the same number of pizzas no matter the scroll position, I dynamically 
calculated the number of pizzas required to show on a given screen height
2. At the moment of resizing pizzas, a loop was going over every pizza element to get their current size. This was not necessary since
every pizza element has the same size. So I took these three lines of code out of the loop and only looked for the first element
to get the size.
3. I took out bits of code for pizzasDIv that were querying the DOM unnecesarily and saved those in a variable to be used once.
4. Likewise, I took out document.body.scrollTop out of a loop to reduce DOM querying

