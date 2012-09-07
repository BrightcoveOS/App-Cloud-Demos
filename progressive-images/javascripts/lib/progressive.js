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

    // a coordinate from top left
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }

    // a rectangle (bounds)
    function Rect(x, y, w, h) {
        this.left = x;
        this.right = x + w;
        this.top = y;
        this.bottom = y + h;
        this.width = w;
        this.height = h;
    }

    // determine if one rectangle touches another
    Rect.prototype.intersects = function (rect) {
        return !(
            rect.left > this.right ||
            rect.right < this.left ||
            rect.top > this.bottom ||
            rect.bottom < this.top
        );
    };

    // create a rectangle from a DOM element
    Rect.fromElement = function (elem) {
        var rect = elem.getBoundingClientRect();
    
        return new Rect(rect.left, rect.top, rect.width, rect.height);
    };

    // the containing element
    var elem = document.getElementById(elementId);

    // images having attribute "data-src"
    var imgs = document.querySelectorAll("img[data-src]");

    // timeout handle
    var timer = null;

    // load all visible images inside the scrollable area
    function loadImages() {
        var img;
        var rect;
        var bounds = Rect.fromElement(elem || document.body);
        var onLoadImage = function () {
            this.style.opacity = 1;
        };

        for (var i = 0; i < imgs.length; i++) {
            img = imgs[i];
            rect = Rect.fromElement(img);
            if (bounds.intersects(rect)) {
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
