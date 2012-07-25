# Apps on Tap

This template demonstrates how to create a fully formed, cross-platform phone 
app using multiple views and multiple data services.

*Note code is not yet documented*

## Core concepts

* Using App Cloud image transcoding to crop and resize images at runtime. *Note
image transcoding is not available in App Cloud Core*
* Using `bc.core.cache()` to store data on the client
* Using `bc.core.getData()` to load a text block
* Using `bc.core.getData()` to load a content feed
* Using `bc.device.fetchContentsOfURL()` to load JSON data
* Using CSS3 transitions and transforms
* "Lazy loading" views by listening for a "viewfocus" event
* Pre-rendering views using cached data
* Implementing scrolling and pagination via `bc.ui` methods
* Handling "tap" events
* Using HTML5 data attributes to embed data in HTML elements
* Generating icons with a [web font][1]
* Writing custom pipes for [Markup.js][2]
* Using a third-party JavaScript [date library][3]

[1]: http://fortawesome.github.com/Font-Awesome/
[2]: https://github.com/adammark/Markup.js
[3]: http://momentjs.com/
