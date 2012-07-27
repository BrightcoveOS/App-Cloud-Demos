/*
 * Controller logic for places.html. All variables and methods are private 
 * except where noted.
 *
 * Usage:
 *
 * var view = new PlacesView();
 * view.render();
 *
 */
function PlacesView() {
    /*
     * The user's current position.
     */
    var position = {};

    /*
     * (PUBLIC) Is this view rendered?
     */
    this.rendered = false;

    /*
     * (PUBLIC) Render this view.
     */
    this.render = function () {
        initHandlers();

        app.showLoadingMessage();

        bc.device.getLocation(handlePositionData, handleError);

        this.rendered = true;
    };

    /*
     * Initialize all event handlers.
     */
    var initHandlers = function () {
        $("#places-index").on("tap", "li", handlePlaceTap);
        $(".back-button").on("tap", handleBackTap);
        $("#refresh").on("tap", handleRefreshTap);
    };

    /*
     * Handle data from bc.device.getLocation().
     */
    var handlePositionData = function (data) {
        // set position data in local variable for later use
        position.lat = data.latitude;
        position.lng = data.longitude;

        // then fetch places data
        bc.device.fetchContentsOfURL(getSearchURL(), handleSearchData, handleError);
    };

    /*
     * Handle data from the Google Places API (/place/search).
     */
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

    /*
     * Handle data from the Google Places API (/place/details).
     */
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

    /*
     * Handle an error in fetching the user's location or places data.
     */
    var handleError = function (error) {
        bc.device.alert(error.errorMessage);
    };

    /*
     * Handle a "tap" event on a list item.
     */
    var handlePlaceTap = function (evt) {
        var reference = this.getAttribute("data-reference");
        var name = this.getAttribute("data-name");

        app.showLoadingMessage();

        // render the detail page immediately with some data
        app.renderTemplate("places-detail", "places-detail-preload", { "place": { "name": name } });

        bc.ui.forwardPage("#places-detail-page");

        // then get the full details and render again
        bc.device.fetchContentsOfURL(getPlaceURL(reference), handlePlaceData, handleError);

        evt.preventDefault();
    };

    /*
     * Handle a "tap" event on the refresh button.
     */
    var handleRefreshTap = function (evt) {
        app.showLoadingMessage();

        bc.device.fetchContentsOfURL(getSearchURL(), handleSearchData, handleError);
    };

    /*
     * Handle a "tap" event on the back button.
     */
    var handleBackTap = function (evt) {
        app.freeImage(document.querySelector("article img"));

        bc.ui.backPage();
    };

    /*
     * Get the search URL for the user's current position. This URL includes
     * three settings defined in manifest.json.
     *
     * See https://developers.google.com/places/documentation/ for more 
     * information about the Google Places API.
     *
     * IMPORTANT: GET YOUR OWN API KEY AT https://code.google.com/apis/console/
     */
    var getSearchURL = function () {
        return "https://maps.googleapis.com/maps/api/place/search/json?sensor=true" +
            "&location=" + position.lat + "," + position.lng +
            "&radius=" + bc.core.getSetting("place-radius") +
            "&types=" + bc.core.getSetting("place-types") +
            "&key=" + bc.core.getSetting("place-key");
    };

    /*
     * Get the detail URL for a place with the given reference ID. This URL 
     * includes a setting defined in manifest.json.
     *
     * See https://developers.google.com/places/documentation/ for more 
     * information about the Google Places API.
     *
     * IMPORTANT: GET YOUR OWN API KEY AT https://code.google.com/apis/console/
     */
    var getPlaceURL = function (reference) {
        return "https://maps.googleapis.com/maps/api/place/details/json?sensor=true" +
            "&reference=" + reference +
            "&key=" + bc.core.getSetting("place-key");
    };

    /*
     * Get the approximate distance between two geo coordinates.
     */
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