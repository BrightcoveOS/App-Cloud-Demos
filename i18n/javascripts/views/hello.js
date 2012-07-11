function HelloView() {

    this.init = function () {
        showLoading();

        renderIntro();

        loadNews();
    };

    var renderIntro = function () {
        var template = bc.templates["hello-intro"];
        var context = { user: { first: "John" } };
        var markup = Mark.up(template, context);

        document.getElementById("intro").innerHTML = markup;
    };

    var loadNews = function () {
        var options = {
            parameterizedFeedValues: { "lang": LANG }
        };

        bc.core.getData("google-news", handleData, handleError, options);
    };

    var handleData = function (data) {
        renderNews(data);

        hideLoading();
    };

    var handleError = function (error) {
        console.log(error);
    };

    var renderNews = function (data) {
        var template = bc.templates["hello-news"];
        var context = { results: data };
        var markup = Mark.up(template, context);

        document.getElementById("results").innerHTML = markup;
    };

    var showLoading = function () {
        document.getElementById("loading").style.opacity = 1;
    };

    var hideLoading = function () {
        document.getElementById("loading").style.opacity = 0;
    };
}
