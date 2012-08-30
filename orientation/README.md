# Landscape and portrait modes with CSS3 Media Queries and Flexible Box Model 

This template demonstrates how to alter a layout when switching between landscape
and portrait modes.

## Core Concepts

* Enabling rotating with `bc.device.setAutoRotateDirections()`
* Using CSS3 [Media Queries][1] and the [Flexible Box Model][2] to create
orientiation-specific layouts

## Usage

To enable rotation, first call `bc.device.setAutoRotateDirections(["all"])`.

Note, the techniques demonstrated here affect the layout, not the behavior, of
a template. You can listen for a `vieworientationchange` event if you need to
perform some action when the user rotates the device.

[1]: http://css-tricks.com/css-media-queries/
[2]: http://www.html5rocks.com/en/tutorials/flexbox/quick/
