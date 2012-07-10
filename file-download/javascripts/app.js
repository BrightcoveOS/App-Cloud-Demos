// show a "Loading ..." message
function showLoadingMessage() {
    document.getElementById("loading").style.opacity = 1;
}

// hide the "Loading ..." message after a brief delay
function hideLoadingMessage() {
    setTimeout(function () {
        document.getElementById("loading").style.opacity = 0;
    }, 300);
}

// render a Markup.js template given the DOM element ID, template ID and context object
function render(elemId, templateId, context) {
    var template = bc.templates[templateId];
    var markup = Mark.up(template, context);

    document.getElementById(elemId).innerHTML = markup;
}

// a custom pipe for displaying video runtime in "mm:ss" notation
Mark.pipes.runtime = function (time, factor) {
    if (!factor) {
        factor = 1;
    }

    var m = Math.floor(time / (60 * factor));
    var s = Math.floor((time / factor) % 60);

    return m + ":" + ("00" + s).substr(-2);
};

// a custom pipe for formatting a date (see momentjs.com)
Mark.pipes.moment = function (date, format) {
    return moment(new Date(+date || date)).format(format);
};
