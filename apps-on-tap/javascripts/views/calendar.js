/*
 * Controller logic for calendar.html. All variables and methods are private 
 * except where noted.
 *
 * Usage:
 *
 * var view = new CalendarView();
 * view.render();
 *
 */
function CalendarView() {
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
        renderIndexPage(getMeetups());

        // then load new data if old data > 1hr old
        if (timedOut()) {
            app.showLoadingMessage();

            bc.core.getData("meetups", handleData, handleError);
        }

        this.rendered = true;
    };

    /*
     * Initialize all event handlers.
     */
    var initHandlers = function () {
        $("#calendar-index").on("tap", "li", handleMeetupTap);
        $(".back-button").on("tap", handleBackTap);
        $("#refresh").on("tap", handleRefreshTap);
    };

    /*
     * Is the cached data more than one hour old?
     */
    var timedOut = function () {
        return (+new Date()) - (bc.core.cache("meetups_saved_at") || 0) > 3600000;
    };

    /*
     * Handle data from the "meetups" feed.
     */
    var handleData = function (data) {
        var meetups = data;

        // if the data has changed ...
        if (app.dataChanged(meetups, getMeetups())) {
            // set it in the cache
            setMeetups(meetups);

            // and render the index page again
            renderIndexPage(meetups);
        }

        app.hideLoadingMessage();
    };

    /*
     * Handle an error in fetching the "meetups" feed.
     */
    var handleError = function (error) {
        bc.device.alert("Oops! " + error.errorMessage);
    };

    /*
     * Handle a "tap" event on a list item.
     */
    var handleMeetupTap = function (evt) {
        var meetupId = this.getAttribute("data-meetup-id");
        var meetup = app.findInDataSet(getMeetups(), "id", meetupId);

        renderDetailPage(meetup);

        evt.preventDefault();
    };

    /*
     * Handle a "tap" event on the refresh button.
     */
    var handleRefreshTap = function (evt) {
        app.showLoadingMessage();

        bc.core.getData("meetups", handleData, handleError);
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
    var renderIndexPage = function (meetups) {
        app.renderTemplate("calendar-index", "calendar-index", { "meetups": meetups });
    };

    /*
     * Render the detail page for the given meetup.
     */
    var renderDetailPage = function (meetup) {
        app.renderTemplate("calendar-detail", "calendar-detail", { "meetup": meetup });

        bc.ui.forwardPage("#calendar-detail-page");
    };

    /*
     * Get the meetups array from the cache.
     */
    var getMeetups = function () {
        return bc.core.cache("meetups") || [];
    };

    /*
     * Set the meetups array in the cache.
     */
    var setMeetups = function (meetups) {
        bc.core.cache("meetups", meetups);
        bc.core.cache("meetups_saved_at", new Date().getTime());
    };

}