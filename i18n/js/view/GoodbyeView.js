function GoodbyeView() {
    var self = this;

    this.init = function () {
        self._init("../txt/markup/goodbye.txt", render);
    };

    var render = function () {
        var template = self.getTemplate("goodbye-intro");
        var context = { user: { first: "John" } };
        var markup = Mark.up(template, context);

        $("#intro").html(markup);
    };
}

GoodbyeView.prototype = new View();
