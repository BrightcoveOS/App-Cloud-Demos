/*
 * Controller logic for buzz.html. All variables and methods are private except
 * where noted.
 *
 * Usage:
 *
 * var view = new BuzzView();
 * view.render();
 *
 */
function BuzzView() {
    /*
     * URL to twitter feed.
     */
    var url = "http://api.twitter.com/1/statuses/user_timeline.json?id=@BCAppCloud";

    /*
     * (PUBLIC) Is this view rendered?
     */
    this.rendered = false;

    /*
     * (PUBLIC) Render this view.
     */
    this.render = function () {
        // add event listeners
        initHandlers();

        // render the index page immediately with cached data
        renderIndexPage(getTweets());

        // then load new data if old data > 1hr old
        if (timedOut()) {
            app.showLoadingMessage();

            bc.device.fetchContentsOfURL(url, handleData, handleError);
        }

        this.rendered = true;
    };

    /*
     * Initialize all event handlers.
     */
    var initHandlers = function () {
        $("#buzz-index").on("tap", "li", handleTweetTap);
        $(".back-button").on("tap", handleBackTap);
        $("#refresh").on("tap", handleRefreshTap);
    };

    /*
     * Is the cached data more than one hour old?
     */
    var timedOut = function () {
        return (+new Date()) - (bc.core.cache("buzz_saved_at") || 0) > 3600000;
    };

    /*
     * Handle data from Twitter.
     */
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

    /*
     * Handle an error in fetching the Twitter data.
     */
    var handleError = function (error) {
        bc.device.alert("Oops! " + error.errorMessage);
    };

    /*
     * Handle a "tap" event on a list item.
     */
    var handleTweetTap = function (evt) {
        var tweetId = this.getAttribute("data-tweet-id");
        var tweet = app.findInDataSet(getTweets(), "id_str", tweetId);

        renderDetailPage(tweet);

        evt.preventDefault();
    };

    /*
     * Handle a "tap" event on the refresh button.
     */
    var handleRefreshTap = function (evt) {
        app.showLoadingMessage();

        bc.device.fetchContentsOfURL(url, handleData, handleError);
    };

    /*
     * Handle a "tap" event on the back button.
     */
    var handleBackTap = function (evt) {
        bc.ui.backPage();
    };

    /*
     * Render the index page.
     */
    var renderIndexPage = function (tweets) {
        app.renderTemplate("buzz-index", "buzz-index", { "tweets": tweets });
    };

    /*
     * Render the detail page.
     */
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