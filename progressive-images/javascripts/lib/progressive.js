/*
 * Progressively load images into an element with the given element ID. This 
 * script looks for images having the attribute "data-src", then populates 
 * the "src" attribute as the images come into the geometry of the containing 
 * element (or the document body if element is undefined).
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
        this.x = x;
        this.y = y;
        this.topleft = new Point(x, y);
        this.topright = new Point(x + w, y);
        this.bottomleft = new Point(x, y + h);
        this.bottomright = new Point(x + w, y + h);
    }

    // determine if a rectangle contains a point
    Rect.prototype.contains = function (point) {
        return point.x >= this.left &&
               point.x <= this.right &&
               point.y >= this.top &&
               point.y <= this.bottom;
    };

    // determine if one rectangle touches another
    Rect.prototype.intersects = function (rect) {
        return this.contains(rect.topleft) ||
               this.contains(rect.topright) ||
               this.contains(rect.bottomleft) ||
               this.contains(rect.bottomright) ||
               rect.contains(this.topleft) ||
               rect.contains(this.topright) ||
               rect.contains(this.bottomleft) ||
               rect.contains(this.bottomright);
    };

    // create a rectangle from a DOM element
    Rect.fromElement = function (elem) {
        var rect = elem.getBoundingClientRect();
    
        return new Rect(rect.left, rect.top, rect.width, rect.height);
    };

    // container bounds, or body bounds
    var bounds = Rect.fromElement(document.getElementById(elementId) || document.body);

    // images having attribute "data-src"
    var imgs = document.querySelectorAll("img[data-src]");

    // timeout handle
    var timer = null;

    // load all visible images inside the scrollable area
    function loadImages() {
        var img;
        var rect;
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
    window.addEventListener("touchmove", handleScroll);
    window.addEventListener("mousemove", handleScroll);
    window.addEventListener("resize", loadImages);

    // load visible images on startup
    loadImages();
}
