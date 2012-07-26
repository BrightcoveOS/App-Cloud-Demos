/*
 * Custom pipes for Markup.js
 * See https://github.com/adammark/Markup.js#writing-custom-pipes
 */

/*
 * Format a date with Moment.js. The input can be a Date object or UTC value.
 *
 * Requires Moment.js: http://momentjs.com/
 *
 * Example:
 *
 * {{created_at|moment>M/D/YYYY}}
 */
Mark.pipes.moment = function (date, format) {
    return moment(new Date(+date || date)).format(format);
};

/*
 * Express a date in "time ago" notation with Moment.js, e.g. "10 minutes ago".
 * The input can be a Date object or UTC value.
 *
 * Requires Moment.js: http://momentjs.com/
 *
 * Example:
 *
 * {{created_at|fromNow}}
 */
Mark.pipes.fromNow = function (date) {
    return moment(new Date(+date || date)).fromNow();
};

/*
 * Wrap all URLs in links.
 *
 * Example:
 *
 * {{article|links}}
 */
Mark.pipes.links = function (str) {
    return str.replace(/\b(https?:[^\b\s]+)\b/g, "<a href=\"$1\">$1</a>");
};

/*
 * Wrap text blocks (delimited by line breaks) in <p> tags. Best to
 * do this after scrubbing the input of all HTML.
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

/*
 * Generate a square thumbnail image. The "image" parameter is an object
 * with src, width and height attributes. The "size" parameter is the
 * thumbnail size in pixels. Note this uses the App Cloud image transcoding
 * API, which is not available in App Cloud Core.
 *
 * Example:
 *
 * {{image|thumbnail>100}}
 */
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

/*
 * Output star characters to the nearest half-star given a decimal input.

 * Requires Font Awesome. http://fortawesome.github.com/Font-Awesome/
 * 
 * Example:
 *
 * {{rating|stars}}
 */
Mark.pipes.stars = function (rating) {
    var n = Math.round(+rating * 2) / 2;

    return new Array(Math.floor(n) + 1).join("&#xf005;") + (n % 1 ? "&#xf089;" : "");
};
