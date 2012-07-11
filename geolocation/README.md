# Geolocation and mapping

This template demonstrates how to access the user's current location and plot
it on a map.

To request the user's location:

``` javascript
bc.device.getLocation(handleData, handleError);

var handleData = function (data) {
    renderMap(data.latitude, data.longitude);
};

```

See the [Google Maps API][1] for additional documentation and examples.

[1]: https://developers.google.com/maps/