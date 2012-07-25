function MenuView() {
    this.rendered = false;

    this.render = function () {
        initHandlers();

        renderIndexPage(getBeers());

        app.showLoadingMessage();

        bc.core.getData("beers", handleData, handleError);

        this.rendered = true;
    };

    var initHandlers = function () {
        $("#config").on("tap", handleConfigTap);
        $("#opts li").on("tap", handleOptionTap);
        $("#menu-index").on("tap", "li", handleBeerTap);
        $(".back-button").on("tap", handleBackTap);
        $("#camera").on("tap", handleCameraTap);
    };

    var handleConfigTap = function (evt) {
        var x = this._showing ? -80 : 0;

        app.moveTo("opts", x, 0);

        this._showing = !this._showing;
    };

    var handleOptionTap = function (evt) {
        var type = this.getAttribute("data-opt");
        var elems = document.querySelectorAll(".grid li");
        var selected;
        var types;

        for (var i = 0; i < elems.length; i++) {
            types = (elems[i].getAttribute("data-types") || "").split(",");
            types.push("all");

            elems[i].style.opacity = types.indexOf(type) > -1 ? "1.0" : "0.25";
        }

        $("#opts li").removeClass("selected");

        $(this).addClass("selected");

        setTimeout(function () {
            $("#config").trigger("tap");
        }, 150);
    };

    var handleData = function (data) {
        var beers = JSON.parse(data.text);

        if (app.dataChanged(beers, getBeers())) {
            setBeers(beers);

            renderIndexPage(beers);
        }

        app.hideLoadingMessage();
    };

    var handleError = function (error) {
        bc.device.alert("Oops! " + error.errorMessage);
    };

    var handleBeerTap = function (evt) {
        var beerId = this.getAttribute("data-beer-id");
        var beer = app.findInDataSet(getBeers(), "id", beerId);

        renderDetailPage(beer);

        evt.preventDefault();
    };

    var handleBackTap = function (evt) {
        app.freeImage(document.querySelector("article img"));

        bc.ui.backPage();
    };

    // simply dropping the pic into an image tag for demo purposes.
    // note img may be reduced in size in workshop
    var handleCameraTap = function (evt) {
        var handleImageData = function (data) {
            var img = new Image();
            img.src = data;

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

    var renderIndexPage = function (beers) {
        app.renderTemplate("menu-index", "menu-index", { "beers": beers });
    };

    var renderDetailPage = function (beer) {
        applyImageProps(beer);

        app.renderTemplate("menu-detail", "menu-detail", { "beer": beer });

        bc.ui.forwardPage("#menu-detail-page");
    };

    var applyImageProps = function (beer) {
        var width = Math.min(300, Math.floor(bc.ui.width() * 0.85));
        var scale = width / beer.image.width;
        var height = Math.floor(beer.image.height * scale);

        beer.image.optimal_width = width;
        beer.image.optimal_height = height;
    };

    var getBeers = function () {
        return bc.core.cache("beers") || [];
    };

    var setBeers = function (beers) {
        bc.core.cache("beers", beers);
    };

}