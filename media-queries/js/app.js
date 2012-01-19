Mark.pipes.date = function (int) {
    return (new Date(+int)).toLocaleDateString();
};

Mark.pipes.runtime = function (time, factor) {
    var m = Math.floor(time / (60 * (factor || 1)));
    var s = Math.floor((time / (factor || 1)) % 60);
    return m + ":" + ("00" + s).substr(-2);
};

Mark.pipes.numberformat = function (num, precision, signed) {
    var m = (+num).toFixed(precision).match(/\d+/g),
        i = m[0].length % 3,
        d = m[1] ? "." + m[1] : "",
        a = i ? [m[0].slice(0, i)] : [],
        s = signed && num > 0 ? "+" : (num < 0) ? "-" : "";

    return s + a.concat(m[0].slice(i).match(/\d{3}/g) || []).join() + d;
};
