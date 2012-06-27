function WeatherView() {

    this.loadWeather = function (zip) {
        var options = {
            parameterizedFeedValues: {
                "zip": zip
            }
        };

        bc.core.getData("weather", handleData, handleError, options);
    };
    
    var handleData = function (data) {
        var template = bc.templates["forecast-template"];
        var context = { "days": data };
        var elem = document.getElementById("forecast");

        elem.innerHTML = Mark.up(template, context);
    };

    var handleError = function (error) {
        console.log(error);
    };

};
