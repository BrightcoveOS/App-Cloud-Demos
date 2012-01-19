Mark.pipes.date = function (int) {
    return (new Date(+int)).toLocaleDateString();
};

Mark.pipes.runtime = function (time, factor) {
    var m = Math.floor(time / (60 * (factor || 1)));
    var s = Math.floor((time / (factor || 1)) % 60);
    return m + ":" + ("00" + s).substr(-2);
};
