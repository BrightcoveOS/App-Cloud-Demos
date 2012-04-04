/*
 * Create a square thumbnail image, given the image url, original 
 * dimensions (width, height) and a target size (t).
 *
 * Example:
 *
 * {{img_url|crop>`img_w`>`img_h`>75>75}}
 */
Mark.pipes.thumb = function (url, width, height, t) {
    var m = Math.min(+width, +height);
    var x = Math.floor((+width / 2) - (m / 2));
    var y = Math.floor((+height / 2) - (m / 2));
    var w = Math.round(+width * (m / +width));
    var h = w;

    var url = "http://transcode.appcloud.brightcove.com" +
        "?image=" + url +
        "&crop=" + [x, y, w, h].join() +
        "&width=" + t +
        "&height=" + t;

    return url;
};

/*
 * Resize an image to the given width.
 *
 * Example:
 *
 * {{img_url|image>250}}
 */
Mark.pipes.image = function (url, width) {
    var url = "http://transcode.appcloud.brightcove.com" +
        "?image=" + url +
        "&width=" + width +
        "&quality=90";

    return url;
};

/*
 * Format a date using Moment.js.
 *
 * Requires Moment.js: http://momentjs.com/
 *
 * Example:
 *
 * {{published|moment>M/D/YYYY}}
 */
Mark.pipes.moment = function (date, format) {
    return moment(new Date(date)).format(format);
};

/*
 * Wrap text blocks (delimited by line breaks) in <p>...</p>.
 *
 * Example:
 *
 * {{content|clean|grafs}}
 */
Mark.pipes.grafs = function (str) {
    return str.replace(/(.+)/g, function (s, p1) {
        return "<p>" + p1 + "</p>";
    });
};
