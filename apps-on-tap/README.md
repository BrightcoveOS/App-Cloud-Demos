# Apps on Tap

This template demonstrates how to create a fully formed, cross-platform phone 
app using multiple views and multiple data services.

## Core concepts

* Using App Cloud [image transcoding][4] to crop and resize images at runtime. 
*Note image transcoding is not available in App Cloud Core*
* Using `bc.core.cache()` to store data on the client
* Using `bc.core.getData()` to load a text block from App Cloud Studio
* Using `bc.core.getData()` to load a content feedfrom App Cloud Studio
* Using `bc.device.fetchContentsOfURL()` to load JSON data from a REST API
* Using CSS3 transitions and transforms
* [Lazy loading][5] views by listening for a "viewfocus" event
* [Pre-rendering views][6] using cached data
* Implementing scrolling and pagination via `bc.ui` methods
* Handling ["tap" events][7]
* Using HTML5 data attributes to embed data in HTML elements
* Generating icons with a [web font][1]
* Writing custom pipes for [Markup.js][2]
* Using a third-party JavaScript [date library][3]

[1]: http://fortawesome.github.com/Font-Awesome/
[2]: https://github.com/adammark/Markup.js
[3]: http://momentjs.com/
[4]: http://support.brightcove.com/en/docs/transcoding-images
[5]: http://blog.brightcove.com/en/2012/02/lazy-loading-your-views-app-cloud
[6]: http://blog.brightcove.com/en/2012/03/discovering-cache-app-cloud
[7]: http://blog.brightcove.com/en/2012/05/app-cloud-101-tap-events