function MapView() {

    var map;
    var elem;

    this.init = function () {
        // set local reference to the map element
        elem = document.getElementById("map-container");

        // resize the map on rotation
        $(bc).bind("vieworientationchange", function (evt, data) {
            setMapHeight(elem);
        });

        // get the user's location
        bc.device.getLocation(handleData, handleError);
    };

    var handleData = function (data) {
        renderMap(data.latitude, data.longitude);
    };

    var handleError = function (error) {
        console.log(error);
    };

    var renderMap = function (lat, lng) {
        var coords = new google.maps.LatLng(lat, lng);

        var opts = {
            zoom: 13,
            center: coords,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: bc.context.os === "ios"
        };

        // dynamically set the height of the map element
        setMapHeight(elem);

        // populate the map
        map = new google.maps.Map(elem, opts);

        // set a marker
        setMarker(lat, lng);
    };

    var setMapHeight = function (elem) {
        var height = $("body").height() - $("#header").height();

        $(elem).height(height);
    };

    var setMarker = function (lat, lng) {
        // add the marker
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(lat, lng),
            map: map,
            // app-specific data
            title: "You are here!",
            markerId: "12345"
        });

        // listen for a click event on the marker
        google.maps.event.addListener(marker, "click", function (evt) {
            console.log(this.title, this.markerId);
        });
    };
}
