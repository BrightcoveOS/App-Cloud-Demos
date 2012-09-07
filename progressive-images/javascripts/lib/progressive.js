/*
 * Progressively load images inside an element with the given element ID (or
 * inside the document body if no element ID is given). This script looks for 
 * images having the attribute "data-src", then populates the "src" attribute 
 * as the images come into view.
 *
 * Set up your images like so:
 *
 * <img src="placeholder.png" width="100" height="100" data-src="http://example.com/img.jpg"/>
 *
 * Then simply run:
 *
 * new ProgressiveLoader("elementId");
 *
 */
function ProgressiveLoader(elementId) {

    // determine if one rectangle touches another
    var hitTest = function (rect1, rect2) {
        return !(
            rect1.left   > rect2.right  ||
            rect1.right  < rect2.left   ||
            rect1.top    > rect2.bottom ||
            rect1.bottom < rect2.top
        );
    };

    // the containing element
    var elem = document.getElementById(elementId) || document.body;

    // images having attribute "data-src"
    var imgs = document.querySelectorAll("img[data-src]");

    // timeout handle
    var timer = null;

    // load all visible images inside the scrollable area
    function loadImages() {
        var img;
        var rect;
        var bounds = elem.getBoundingClientRect();
        var onLoadImage = function () {
            this.style.opacity = 1;
        };

        for (var i = 0; i < imgs.length; i++) {
            img = imgs[i];
            rect = img.getBoundingClientRect();

            if (hitTest(bounds, rect)) {
                img.src = img.getAttribute("data-src");
                img.onload = onLoadImage;
            }
        }
    }

    // when the user scrolls, wait 400ms, then load visible images
    function handleScroll(evt) {
        if (timer === null) {
            timer = setTimeout(function () {
                loadImages();
                timer = null;
            }, 400);
        }
    }

    // listen for touch/mouse move
    elem.addEventListener("touchmove", handleScroll);
    elem.addEventListener("mousemove", handleScroll);
    elem.addEventListener("resize", loadImages);

    // load visible images on startup
    loadImages();
}
