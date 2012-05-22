function GoodbyeView() {
    var LANG = "en";

    this.init = function () {
        Mark.globals.lang = LANG;

        var template = bc.templates["goodbye-intro"];
        var context = { user: { first: "John" } };
        var markup = Mark.up(template, context);

        $("#intro").html(markup);
    };

}
