/*
 * Global functions for this app. (Include app.js in each view.)
 */
var app = {};

/*
 * Show a "Loading ..." message (<div id="loading" class="loading">).
 * See app.css for styles.
 */
app.showLoadingMessage = function () {
    document.getElementById("loading").style.opacity = 1;
};

/*
 * Hide the "Loading ..." message after a brief delay.
 */
app.hideLoadingMessage = function() {
    setTimeout(function () {
        document.getElementById("loading").style.opacity = 0;
    }, 300);
};

/*
 * Render a Markup.js template given the template ID, element ID and context
 * object. Note templates are automatically loaded into bc.templates object.
 * See docs at https://github.com/adammark/Markup.js and article at
 * http://blog.brightcove.com/en/2012/05/making-better-markup-markupjs
 */
app.renderTemplate = function (templateId, elemId, context) {
    var options = {
        globals: {
            devicePixelRatio: window.devicePixelRatio || 1
        }
    };

    var template = bc.templates[templateId];
    var markup = Mark.up(template, context, options);

    document.getElementById(elemId).innerHTML = markup;
};

/*
 * Compare two data feeds (objects). For more complex comparison operations,
 * see bc.utils.isEqual().
 */
app.dataChanged = function (feed1, feed2) {
    return JSON.stringify(feed1) !== JSON.stringify(feed2);
};

/*
 * Find an object in an array of objects where the given object property
 * has the given value.
 * 
 * Example:
 *
 * var article = app.findInDataSet(articles, "articleId", "12345");
 */
app.findInDataSet = function (data, propName, propVal) {
    for (var i = 0; i < data.length; i++) {
        if (data[i][propName] === propVal) {
            return data[i];
        }
    }

    return null;
};

/*
 * Remove an image from memory by overwriting its source value.
 */
app.freeImage = function (img) {
    setTimeout(function () {
        img.src = "../images/blank.png";
    }, 250);
};

/*
 * Animate an element (with position: absolute) to point x, y in the viewport.
 */
app.moveTo = function (elemId, x, y) {
    var elem = document.getElementById(elemId);
    elem.style.setProperty("-webkit-transform", "translate3d(" + x + "px," + y + "px,0px)");
};
