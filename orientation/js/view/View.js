function View() {
    // a reference to this object
    var self = this;

    // the "Loading ..." element. see styles in app.css
    var msg;

    // HTML templates by name
    var templates = {};

    // load HTML templates from a text file
    this.loadTemplates = function (file, callback) {
        file += "?" + (+new Date());

        // load the text file (see "txt" directory)
        $.get(file, function (text) {
            text = text.split("=====").splice(1);

            // split into named templates
            for (var t in text) {
                var i = text[t].indexOf("\n");
                var key = text[t].substr(0, i).trim();
                var val = text[t].substr(i).trim();
                templates[key] = val;
            }

            // run callback in the context of this View
            callback(self);
        }, "html");
    };

    // get HTML template by name
    this.getTemplate = function (name) {
        return templates[name];
    };

    // show the "Loading ..." message. see styles in app.css
    this.showLoading = function () {
        if (!msg) {
            msg = document.createElement("div");
            msg.className = "loading";
            msg.innerHTML = "Loading ...";
            document.body.appendChild(msg);
        }

        msg.style.opacity = 1;
    };

    // hide the "Loading ..." message
    this.hideLoading = function () {
        msg.style.opacity = 0;
    };

}
