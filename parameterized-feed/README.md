# Using a parameterized content feed

This template demonstrates how to create a parameterized content feed using
the [Google Weather API][1].

## Core Concepts

* Passing a runtime variable to a [parameterized content feed][2]

## Usage

To create a parameterized feed, first define the URL in App Cloud Studio:

```
http://www.google.com/ig/api?weather={"zip":"90210"}
```

Then declare the content feed in your manifest file:

``` javascript
"data": [
    {
        "name": "weather",
        "contentFeed": "4eb728401e50492d9100add3",
        "type": "feed"
    }
]
```

In index.html, change the ZIP Code value:

``` javascript
var view = new WeatherView();

$(bc).bind("init", function () {
    view.loadWeather("90210");
});
```

(In a real app, you would solicit this information from the user.)

[1]: http://www.google.com/ig/api?weather=02210
[2]: http://docs.brightcove.com/en/app-cloud/using-parameters-in-content-feed-urls
