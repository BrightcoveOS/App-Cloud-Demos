function BlogView() {  
    // current content session ID, for content analytics
    var contentSessionId = null;

    // initialize this view
    this.init = function () {
        // set up event handlers
        registerEventListeners();

        // show a "Loading" message
        showLoadingMessage();

        // first, try to render old data
        renderArticleList(getSavedArticles());

        // then load fresh data
        bc.core.getData("blog", handleData, handleError);

        // apply any dynamic styles
        bc.core.applyStyles();
    };

    // set up event handlers
    var registerEventListeners = function () {
        // listen for an article tap
        $(".articles li").live("tap", function (evt) {
            var guid = evt.currentTarget.getAttribute("data-guid");
            var article = getArticle(guid);

            renderArticleDetail(article);

            startContentSession(article);
        });

        // listen for a "back" tap
        $(".back-button").live("tap", function (evt) {
            bc.ui.backPage();

            endContentSession();
        });

        // listen for a viewblur
        $(bc).bind("viewblur", function (evt) {
            endContentSession();
        });
    };

    // handle a successful response from bc.core.getData()
    var handleData = function (data) {
        // log the response
        console.log(data);

        // save the articles to cache
        saveArticles(data);

        // render the articles
        renderArticleList();

        // hide the "Loading" message
        hideLoadingMessage();
    };

    // handle an error response from bc.core.getData()
    var handleError = function (error) {
        //bc.device.alert("Oops!");

        console.error(error);
    };

    // render the list of articles
    var renderArticleList = function () {
        Mark.globals.dateFormat = bc.core.getSetting("date-format");

        var template = bc.templates["index-template"];
        var context = { "articles": getSavedArticles() };
        var markup = Mark.up(template, context);

        document.getElementById("article-index").innerHTML = markup;
    };

    // render an individual article
    var renderArticleDetail = function (article) {
        var template = bc.templates["detail-template"];
        var context = { "article": article };
        var markup = Mark.up(template, context);

        document.getElementById("article-detail").innerHTML = markup;

        // transition to the detail "page"
        var page = document.getElementById("detail-page");
        bc.ui.forwardPage(page);
    };

    // get blog articles from cache, or return an empty array
    var getSavedArticles = function () {
        return bc.core.cache("articles") || [];
    };

    // save blog articles in the cache
    var saveArticles = function (data) {
        bc.core.cache("articles", data);
    };

    // find an article by the given ID, or return null
    var getArticle = function (guid) {
        var articles = getSavedArticles();

        for (var i in articles) {
            if (articles[i].guid === guid) {
                return articles[i];
            }
        }

        return null;
    };

    // start content session
    var startContentSession = function (article) {
        contentSessionId = article.guid;

        bc.metrics.startContentSession(contentSessionId, article.title);

        console.log("Start content session: " + contentSessionId);
    };

    // end content session
    var endContentSession = function () {
        if (contentSessionId) {
            bc.metrics.endContentSession(contentSessionId);

            console.log("End content session: " + contentSessionId);
        }

        contentSessionId = null;
    };

    // show the "loading" message
    var showLoadingMessage = function () {
        document.getElementById("loading").style.opacity = 1;
    };

    // hide the "loading" message
    var hideLoadingMessage = function () {
        document.getElementById("loading").style.opacity = 0;
    };

}
