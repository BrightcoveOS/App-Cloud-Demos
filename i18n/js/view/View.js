function View() {
    // a reference to this object
    var self = this;

    // supported languages
    var langs = ["en", "es", "ja"];

    // the user's language preference, defaults to "en"
    var lang = (navigator.language || "en-us").split("-")[0];

    // the "Loading ..." element. see styles in app.css
    var msg;

    // language resources by name
    var resources = {};

    // HTML templates by name
    var templates = {};

    // load templates and resources (before doing anything else)
    this._init = function (file, callback) {
        if (langs.indexOf(lang) === -1) {
            lang = "en";
        }

        var loaded = { resources: false, templates: false };

        var onload = function () {
            // if everything is loaded, proceed
            if (loaded.resources && loaded.templates) {
                callback.call(self);
            }
        }

        loadResources(function () {
            loaded.resources = true;
            onload();
        });

        loadTemplates(file, function () {
            loaded.templates = true;
            onload();
        });
    };

    // load language resources from a text file
    var loadResources = function (callback) {
        var file = "../txt/lang/" + lang + ".txt?" + (+new Date());

        $.get(file, function (text) {
            text = text.split("\n");

            for (var t in text) {
                var s = text[t].trim();
                if (!s.length || s.charAt(0) === "#") {
                    continue;
                }
                s = s.split("=");
                resources[s[0].trim()] = s[1].trim();
            }

            Mark.includes = resources;
            Mark.includes.lang = lang;

            callback();
        }, "html");
    };

    // load HTML templates from a text file
    var loadTemplates = function (file, callback) {
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
            callback();
        }, "html");
    };

    // get the user's language preference
    this.getLanguage = function () {
        return lang;
    };

    // get HTML template by name
    this.getTemplate = function (name) {
        return templates[name];
    };

    // get a language string by name
    this.translate = function (name) {
        return resources[name];
    };

    // show the "Loading ..." message. see styles in app.css
    this.showLoading = function () {
        if (!msg) {
            msg = document.createElement("div");
            msg.className = "loading";
            msg.innerHTML = this.translate("loading_msg");
            document.body.appendChild(msg);
        }

        msg.style.opacity = 1;
    };

    // hide the "Loading ..." message
    this.hideLoading = function () {
        msg.style.opacity = 0;
    };

    // show this view
    this.show = function () {
        document.body.style.visibility = "visible";
    };

    // translate a bc error code into a user-friendly message
    this.getErrorMessage = function (code) {
        return this.translate("error_msg_" + (code || 100)) || "Oops!";
    };
}
