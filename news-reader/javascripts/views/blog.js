function BlogView() {  
    var load_msg;

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
    };

    // set up event handlers
    var registerEventListeners = function () {
        // listen for an article tap
        $(".articles li").live("tap", function (evt) {
            var guid = evt.currentTarget.getAttribute("data-guid");
            var article = getArticle(guid);

            renderArticleDetail(article);
        });

        // listen for a "back" tap
        $(".back-button").live("tap", function (evt) {
            bc.ui.backPage();
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
        console.error(error);
    };

    // render the list of articles
    var renderArticleList = function () {
        var template = bc.templates["list-template"];
        var context = { "articles": getSavedArticles() };
        var markup = Mark.up(template, context);

        document.getElementById("article-list").innerHTML = markup;
    };

    // render an individual article
    var renderArticleDetail = function (article) {
        var template = bc.templates["detail-template"];
        var context = { "article": article };
        var markup = Mark.up(template, context);

        document.getElementById("article-detail").innerHTML = markup;

        // transition to the article
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

    // show a "Loading" message
    var showLoadingMessage = function () {
        if (!load_msg) {
            load_msg = document.createElement("div");
            load_msg.className = "loading";
            load_msg.innerHTML = "Loading ...";
            document.body.appendChild(load_msg);
        }

        load_msg.style.opacity = 1;
    };

    // hide the "Loading" message
    var hideLoadingMessage = function () {
        load_msg.style.opacity = 0;
    };
}

// initialize the view when bc is ready
$(bc).bind("init", function () {
    var view = new BlogView();
    view.init();
});
