# Universal app approach

This template demonstrates one way to implement a "universal" app that 
works across phones and tablets.

## Core concepts

* Using CSS3 [Media Queries][1] to change the presentation when switching 
between portrait and landscape modes
* Detecting the form factor ("phone" or "tablet")
* Instantiating a JavaScript object ("PhoneBlogView" or "TabletBlogView")
using a factory pattern
* Extending object functionality with prototypical inheritance

[1]: http://css-tricks.com/css-media-queries/