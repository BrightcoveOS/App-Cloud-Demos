/*
 * This script implements lazy loading of images. Set up your "lazy" images by
 * specifying a placeholder URL in the "src" attribute and the actual URL in 
 * the "data-src" attribute:
 *
 * <img src="placeholder.png" data-src="http://example.com/img.jpg" width="100" height="100"/>
 *
 * Images must have a defined width and height.
 *
 * Then run:
 *
 * ProgressiveLoader.init("some-element-id");
 *
 * If no element ID is provided, document.body is assumed.
 *
 * To make the images fade in gracefully, add this to your CSS:
 * 
 * img[data-src] {
 *     opacity: .15;
 *     -webkit-transition: opacity 200ms linear;
 *     -webkit-transform: translate3d(0, 0, 0);
 * }
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
    var loadImages = function () {
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
    var handleScroll = function (evt) {
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

ProgressiveLoader.init = function (elementId) {
    new ProgressiveLoader(elementId);
};
