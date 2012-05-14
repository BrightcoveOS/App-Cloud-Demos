var WeatherView = function () {

    // handle response from bc.core.getData()
    var handleData = function (data) {
        var template = bc.templates["forecast-template"];
        var context = { "days": data };
        var elem = document.getElementById("forecast");

        elem.innerHTML = Mark.up(template, context);
    };

    // handle error from bc.core.getData()
    var handleError = function (error) {
        console.log(error);
    };

    // load weather for the given ZIP code
    this.loadWeather = function (zip) {
        var options = {
            parameterizedFeedValues: {
                "zip": zip
            }
        };

        bc.core.getData("weather", handleData, handleError, options);
    };
    
};
