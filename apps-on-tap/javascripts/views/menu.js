/*
 * Controller logic for menu.html. All variables and methods are private except
 * where noted.
 *
 * Usage:
 *
 * var view = new MenuView();
 * view.render();
 *
 */
function MenuView() {
    /*
     * (PUBLIC) Is this view rendered?
     */
    this.rendered = false;

    /*
     * (PUBLIC) Render this view.
     */
    this.render = function () {
        // add event listeners
        initHandlers();

        // render the index page immediately with cached data
        renderIndexPage(getBeers());

        // then load new data
        app.showLoadingMessage();

        bc.core.getData("beers", handleData, handleError);

        this.rendered = true;
    };

    /*
     * Initialize all event handlers.
     */
    var initHandlers = function () {
        $("#config").on("tap", handleConfigTap);
        $("#opts li").on("tap", handleOptionTap);
        $("#menu-index").on("tap", "li", handleBeerTap);
        $(".back-button").on("tap", handleBackTap);
        $("#camera").on("tap", handleCameraTap);
    };

    /*
     * Handle data from the "beers" feed.
     */
    var handleData = function (data) {
        // convert response text to an object
        var beers = JSON.parse(data.text);

        // if the data has changed ...
        if (app.dataChanged(beers, getBeers())) {
            // set it in the cache
            setBeers(beers);

            // and render the index page again
            renderIndexPage(beers);
        }

        app.hideLoadingMessage();
    };

    /*
     * Handle an error in fetching the "beers" feed.
     */
    var handleError = function (error) {
        bc.device.alert("Oops! " + error.errorMessage);
    };

    /*
     * Handle a "tap" event on the config button.
     */
    var handleConfigTap = function (evt) {
        // determine whether to slide the options panel in or out
        var x = this._optsVisible ? -80 : 0;

        app.moveTo("opts", x, 0);

        this._optsVisible = !this._optsVisible;
    };

    /*
     * Handle a "tap" event on the options menu.
     */
    var handleOptionTap = function (evt) {
        var type = this.getAttribute("data-opt");
        var elems = document.querySelectorAll(".grid li");
        var selected;
        var types;

        // for each list item
        for (var i = 0; i < elems.length; i++) {
            // get the beer "types" from the element data
            types = (elems[i].getAttribute("data-types") || "").split(",");
            types.push("all");

            // show beer if has selected type, else hide
            elems[i].style.opacity = types.indexOf(type) > -1 ? "1.0" : "0.25";
        }

        // update the options menu
        $("#opts li").removeClass("selected");

        $(this).addClass("selected");

        // hide the options menu after a brief delay
        setTimeout(function () {
            $("#config").trigger("tap");
        }, 150);
    };

    /*
     * Handle a "tap" event on a list item.
     */
    var handleBeerTap = function (evt) {
        var beerId = this.getAttribute("data-beer-id");
        var beer = app.findInDataSet(getBeers(), "id", beerId);

        renderDetailPage(beer);

        evt.preventDefault();
    };

    /*
     * Handle a "tap" event on the back button.
     */
    var handleBackTap = function (evt) {
        app.freeImage(document.querySelector("article img"));

        bc.ui.backPage();
    };

    /*
     * Handle a "tap" event on the camera button.
     */
    var handleCameraTap = function (evt) {
        var handleImageData = function (data) {
            // create an image object from the image data (in the Workshop, this
            // is a base64-encoded string; in the compiled app, it's a file path)
            var img = new Image();
            img.src = data;

            // after the image object has loaded, compute the optimal width and 
            // height, then drop into the page
            img.onload = function () {
                var aspect = this.width / this.height;
                var width = aspect > 1 ? Math.floor(bc.ui.width() * 0.85) : 200;
                var height = Math.floor(this.height * (width / this.width));
                var context = {
                    "src": this.src,
                    "width": width,
                    "height": height
                };

                app.renderTemplate("menu-detail", "snap-detail", context);

                bc.ui.forwardPage("#menu-detail-page");
            };
        };

        var handleImageError = function (error) {
            if (error.errorCode != bc.device.codes.USER_CANCEL) {
                bc.device.alert(error.errorMessage);
            }
        };

        bc.device.takePhoto(handleImageData, handleImageError);
    };

    /*
     * Render the index page.
     */
    var renderIndexPage = function (beers) {
        app.renderTemplate("menu-index", "menu-index", { "beers": beers });
    };

    /*
     * Render the detail page for the given beer.
     */
    var renderDetailPage = function (beer) {
        applyImageProps(beer);

        app.renderTemplate("menu-detail", "menu-detail", { "beer": beer });

        bc.ui.forwardPage("#menu-detail-page");
    };

    /*
     * Determine the optimal width and height for the beer image. This method 
     * accepts and modifies a beer object.
     */
    var applyImageProps = function (beer) {
        var width = Math.min(300, Math.floor(bc.ui.width() * 0.85));
        var scale = width / beer.image.width;
        var height = Math.floor(beer.image.height * scale);

        beer.image.optimal_width = width;
        beer.image.optimal_height = height;
    };

    /*
     * Get the beers array from the cache.
     */
    var getBeers = function () {
        return bc.core.cache("beers") || [];
    };

    /*
     * Set the beers array in the cache.
     */
    var setBeers = function (beers) {
        bc.core.cache("beers", beers);
    };

}