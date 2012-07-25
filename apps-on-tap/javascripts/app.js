var app = {};

// show a "Loading ..." message
app.showLoadingMessage = function () {
    document.getElementById("loading").style.opacity = 1;
};

// hide the "Loading ..." message after a brief delay
app.hideLoadingMessage = function() {
    setTimeout(function () {
        document.getElementById("loading").style.opacity = 0;
    }, 300);
};

// render a Markup.js template given the DOM element ID and template ID
app.renderTemplate = function (elemId, templateId, context) {
    var options = {
        globals: {
            devicePixelRatio: window.devicePixelRatio || 1
        }
    };

    var template = bc.templates[templateId];
    var markup = Mark.up(template, context, options);

    document.getElementById(elemId).innerHTML = markup;
};

// compare two data feed objects
app.dataChanged = function (feed1, feed2) {
    return JSON.stringify(feed1) !== JSON.stringify(feed2);
};

// find an object in an array where its value for key equals val
app.findInDataSet = function (data, key, val) {
    for (var i = 0; i < data.length; i++) {
        if (data[i][key] === val) {
            return data[i];
        }
    }

    return null;
};

// remove an image from memory by overwriting the source
app.freeImage = function (img) {
    setTimeout(function () {
        img.src = "../images/blank.png";
    }, 250);
};

// animate an element to x, y
app.moveTo = function (elemId, x, y) {
    var elem = document.getElementById(elemId);
    elem.style.setProperty("-webkit-transform", "translate3d(" + x + "px," + y + "px,0px)");
};
