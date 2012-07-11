# News Reader

This template demonstrates how to make a simple news view from an 
[RSS feed][1].

## Core concepts

* Loading a content feed via `bc.core.getData()`
* Using `bc.core.getSetting()` to apply a dynamic setting
* Using `bc.core.getStyles()` to apply dynamic styles
* Using a JavaScript templating system, [Markup.js][2], to render HTML code
from text templates
* Saving data in the cache with `bc.core.cache()`
* Handling "tap" events
* Transitioning from one "page" to another inside a single HTML document
with `bc.ui.forwardPage()` and `bc.ui.backPage()`
* Cropping images with App Cloud's image transcoding service
* Capturing content analytics with `bc.metrics.startContentSession()` and
`bc.metrics.endContentSession()`

[1]: http://beer.brightcove.com/?feed=rss2
[2]: https://github.com/adammark/Markup.js