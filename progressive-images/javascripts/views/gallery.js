/*
 * Create a gallery of random cat photos
 */
function GalleryView() {

    this.init = function () {
        var imgs = [], img, w, h;

        // an array of image data objects
        for (var i = 0; i < 200; i++) {
            img = {};
            img.width = 100 + Math.round(Math.random() * 100);
            img.height = 100 + Math.round(Math.random() * 100);
            img.src = "http://placekitten.com/" + img.width + "/" + img.height;

            imgs.push(img);
        }

        // drop data into template
        var template = bc.templates["gallery"];
        var context = { "images": imgs };
        var markup = Mark.up(template, context);

        // drop markup into the inner container (scrollable area)
        document.getElementById("grid").innerHTML = markup;

        // initialize the image loader with the outer container (fixed area)
        new ProgressiveLoader("grid-container");
    };

}
