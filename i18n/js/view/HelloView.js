function HelloView() {
    var LANG = "en";

    this.init = function () {
        showLoading();

        renderIntro();
        renderNews();
    };

    var renderIntro = function () {
        var template = bc.templates["hello-intro"];
        var context = { user: { first: "John" } };
        var markup = Mark.up(template, context);

        $("#intro").html(markup);
    };

    var renderNews = function () {
        var handleData = function (data) {
            var template = bc.templates["hello-news"];
            var context = { results: data };
            var markup = Mark.up(template, context);

            $("#results").html(markup);

            hideLoading();
        };

        var handleError = function (error) {
            console.log(error);
        };

        var options = {
            parameterizedFeedValues: { "lang": LANG }
        };

        bc.core.getData("google-news", handleData, handleError, options);
    };

    var showLoading = function () {
        document.getElementById("loading").style.opacity = 1;
    };

    var hideLoading = function () {
        document.getElementById("loading").style.opacity = 0;
    };
}
