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

Mark.pipes.fromNow = function (date) {
    return moment(new Date(+date || date)).fromNow();
};

// TODO doc
Mark.pipes.links = function (str) {
    return str.replace(/\b(https?:[^\b\s]+)\b/g, "<a href=\"$1\">$1</a>");
};

// TODO doc
Mark.pipes.grafs = function (str) {
    return str.replace(/(.+)/g, function (s, p1) {
        return "<p>" + p1 + "</p>";
    });
};

// generate a square thumbnail from an image object (url, width, height)
Mark.pipes.thumbnail = function(image, size) {
    var minAspect = Math.min(image.width, image.height);

    var x = Math.floor((image.width / 2) - (minAspect / 2));
    var y = Math.floor((image.height / 2) - (minAspect / 2));
    var w = Math.round(image.width * (minAspect / image.width));

    var url = "http://transcode.appcloud.brightcove.com" +
        "?image=" + image.url +
        "&crop=" + [x, y, w, w].join() +
        "&width=" + size +
        "&height=" + size;

    return url;
};

Mark.pipes.stars = function (rating) {
    var n = Math.round(+rating * 2) / 2;

    return new Array(Math.floor(n) + 1).join("&#xf005;") + (n % 1 ? "&#xf089;" : "");
};

Mark.pipes.scale = function (val, range, ticks, factor) {
    var f = +factor;
    var v = +val;
    var r = v % f;
    var n = r < f / 2 ? v - (v % f) : (v + f) - (v % f);
    console.log(n, r);

    return (n / f) * Math.floor(+range / +ticks);
};
