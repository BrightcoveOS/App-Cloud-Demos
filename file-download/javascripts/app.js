function showLoadingMessage() {
    document.getElementById("loading").style.opacity = 1;
}

function hideLoadingMessage() {
    setTimeout(function () {
        document.getElementById("loading").style.opacity = 0;
    }, 300);
}

function render(elemId, templateId, context) {
    var template = bc.templates[templateId];
    var markup = Mark.up(template, context);

    document.getElementById(elemId).innerHTML = markup;
}

Mark.pipes.runtime = function (time, factor) {
    if (!factor) {
        factor = 1;
    }

    var m = Math.floor(time / (60 * factor));
    var s = Math.floor((time / factor) % 60);

    return m + ":" + ("00" + s).substr(-2);
};

Mark.pipes.moment = function (date, format) {
    return moment(new Date(+date || date)).format(format);
};
