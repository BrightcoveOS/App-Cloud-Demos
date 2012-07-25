function BuzzView() {
    var url = "http://api.twitter.com/1/statuses/user_timeline.json?id=@BCAppCloud";

    this.rendered = false;

    this.render = function () {
        initHandlers();

        renderIndexPage(getTweets());

        if (timedOut()) {
            app.showLoadingMessage();

            bc.device.fetchContentsOfURL(url, handleData, handleError);
        }

        this.rendered = true;
    };

    var initHandlers = function () {
        $("#buzz-index").on("tap", "li", handleTweetTap);
        $(".back-button").on("tap", handleBackTap);
        $("#refresh").on("tap", handleRefreshTap);
    };

    var timedOut = function () {
        // 1 hr timeout
        return (+new Date()) - (bc.core.cache("buzz_saved_at") || 0) > 3600000;
    };

    var handleData = function (data) {
        var tweets = data;

        try {
            tweets = JSON.parse(data);
        }
        catch (e) {
        }

        setTweets(tweets);

        renderIndexPage(tweets);

        app.hideLoadingMessage();
    };

    var handleError = function (error) {
        bc.device.alert("Oops! " + error.errorMessage);
    };

    var handleTweetTap = function (evt) {
        var tweetId = this.getAttribute("data-tweet-id");
        var tweet = app.findInDataSet(getTweets(), "id_str", tweetId);

        renderDetailPage(tweet);

        evt.preventDefault();
    };

    var handleRefreshTap = function (evt) {
        app.showLoadingMessage();

        bc.device.fetchContentsOfURL(url, handleData, handleError);
    };

    var handleBackTap = function (evt) {
        bc.ui.backPage();
    };

    var renderIndexPage = function (tweets) {
        app.renderTemplate("buzz-index", "buzz-index", { "tweets": tweets });
    };

    var renderDetailPage = function (tweet) {
        app.renderTemplate("buzz-detail", "buzz-detail", { "tweet": tweet });

        bc.ui.forwardPage("#buzz-detail-page");
    };

    var getTweets = function () {
        return bc.core.cache("buzz_data") || [];
    };

    var setTweets = function (tweets) {
        bc.core.cache("buzz_data", tweets);
        bc.core.cache("buzz_saved_at", new Date().getTime());
    };

}