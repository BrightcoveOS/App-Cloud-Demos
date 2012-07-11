var LANG = "en";

Mark.globals.lang = LANG;

Mark.pipes.datetime = function (date) {
    return new Date(+date || date).toLocaleString();
};
