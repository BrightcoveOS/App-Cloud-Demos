function HelloView() {
    var self = this;

    this.init = function () {
        self._init("../txt/markup/hello.txt", render);
    };

    var render = function () {
        self.showLoading();

        renderIntro();
        renderNews();
    };

    var renderIntro = function () {
        var template = self.getTemplate("hello-intro");
        var context = { user: { first: "John" } };
        var markup = Mark.up(template, context);

        $("#intro").html(markup);
    };

    var renderNews = function () {
        var onsuccess = function (data) {
            var template = self.getTemplate("hello-news");
            var context = { results: data };
            var markup = Mark.up(template, context);

            $("#results").html(markup);

            self.hideLoading();
        };

        var onerror = function (error) {
            bc.device.alert(self.getErrorMessage(error.errorCode));
        };

        var options = {
            parameterizedFeedValues: { "lang": self.getLanguage() }
        };

        bc.core.getData("google-news", onsuccess, onerror, options);
    };
}

HelloView.prototype = new View();
