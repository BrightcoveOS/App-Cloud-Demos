function GoodbyeView() {

    this.init = function () {
        var template = bc.templates["goodbye-intro"];
        var context = { user: { first: "John" } };
        var markup = Mark.up(template, context);

        document.getElementById("intro").innerHTML = markup;
    };

}
