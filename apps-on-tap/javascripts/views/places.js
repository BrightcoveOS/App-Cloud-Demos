function PlacesView() {
    var position = {};

    this.rendered = false;

    this.render = function () {
        initHandlers();

        app.showLoadingMessage();

        bc.device.getLocation(handlePositionData, handleError);

        this.rendered = true;
    };

    var initHandlers = function () {
        $("#places-index").on("tap", "li", handlePlaceTap);
        $(".back-button").on("tap", handleBackTap);
        $("#refresh").on("tap", handleRefreshTap);
    };

    var handlePositionData = function (data) {
        position.lat = data.latitude;
        position.lng = data.longitude;

        bc.device.fetchContentsOfURL(getSearchURL(), handleSearchData, handleError);
    };

    var handleSearchData = function (data) {
        try {
            data = JSON.parse(data);
        }
        catch (e) {            
        }

        var places = data.results;

        for (var i in places) {
            places[i].distance = getDistance(position, places[i].geometry.location);
        }

        app.renderTemplate("places-index", "places-index", { "places": places });

        app.hideLoadingMessage();
    };

    var handleError = function (error) {
        bc.device.alert(error.errorMessage);
    };

    var handlePlaceTap = function (evt) {
        var reference = this.getAttribute("data-reference");
        var name = this.getAttribute("data-name");

        app.showLoadingMessage();

        app.renderTemplate("places-detail", "places-detail-preload", { "place": { "name": name } });

        bc.ui.forwardPage("#places-detail-page");

        bc.device.fetchContentsOfURL(getPlaceURL(reference), handlePlaceData, handleError);

        evt.preventDefault();
    };

    var handleRefreshTap = function (evt) {
        app.showLoadingMessage();

        bc.device.fetchContentsOfURL(getSearchURL(), handleSearchData, handleError);
    };

    var handleBackTap = function (evt) {
        app.freeImage(document.querySelector("article img"));

        bc.ui.backPage();
    };

    var handlePlaceData = function (data) {
        try {
            data = JSON.parse(data);
        }
        catch (e) {            
        }

        // don't render during the transition
        setTimeout(function () {
            app.renderTemplate("places-detail", "places-detail", { "place": data.result });
        }, 200);

        app.hideLoadingMessage();
    };

    var getSearchURL = function () {
        return "https://maps.googleapis.com/maps/api/place/search/json?sensor=true" +
            "&location=" + position.lat + "," + position.lng +
            "&radius=" + bc.core.getSetting("place-radius") +
            "&types=" + bc.core.getSetting("place-types") +
            "&key=" + bc.core.getSetting("place-key");
    };

    var getPlaceURL = function (reference) {
        return "https://maps.googleapis.com/maps/api/place/details/json?sensor=true" +
            "&reference=" + reference +
            "&key=" + bc.core.getSetting("place-key");
    };

    var getDistance = function (p1, p2) {
        var radians = function (n) {
            return n * Math.PI / 180;
        };

        // see http://www.movable-type.co.uk/scripts/latlong.html
        var R = 6371; // kms
        var dLat = radians(p2.lat - p1.lat);
        var dLon = radians(p2.lng - p1.lng);
        var lat1 = radians(p1.lat);
        var lat2 = radians(p2.lat);

        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2); 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); 
        var d = R * c;

        return d / 1.609344; // miles
    };

}