# Using a parameterized content feed

This template demonstrates how to create a parameterized content feed using
the [Google Weather API][1].

To create a parameterized feed, first define the parameters in your content 
feed URL inside App Cloud Studio:

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

Then load the content feed with runtime variables:

``` javascript
var options = {
    parameterizedFeedValues: {
        "zip": zip
    }
};

bc.core.getData("weather", handleData, handleError, options);
```

[1]: http://www.google.com/ig/api?weather=02210