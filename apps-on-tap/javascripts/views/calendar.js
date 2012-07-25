function CalendarView() {
    this.rendered = false;

    this.render = function () {
        initHandlers();

        renderIndexPage(getMeetups());

        if (timedOut()) {
            app.showLoadingMessage();

            bc.core.getData("meetups", handleData, handleError);
        }

        this.rendered = true;
    };

    var initHandlers = function () {
        $("#calendar-index").on("tap", "li", handleMeetupTap);
        $(".back-button").on("tap", handleBackTap);
        $("#refresh").on("tap", handleRefreshTap);
    };

    var timedOut = function () {
        // 1 hr timeout
        return (+new Date()) - (bc.core.cache("meetups_saved_at") || 0) > 3600000;
    };

    var handleData = function (data) {
        var meetups = data;

        if (app.dataChanged(meetups, getMeetups())) {
            setMeetups(meetups);

            renderIndexPage(meetups);
        }

        app.hideLoadingMessage();
    };

    var handleError = function (error) {
        bc.device.alert("Oops! " + error.errorMessage);
    };

    var handleMeetupTap = function (evt) {
        var meetupId = this.getAttribute("data-meetup-id");
        var meetup = app.findInDataSet(getMeetups(), "id", meetupId);

        renderDetailPage(meetup);

        evt.preventDefault();
    };

    var handleRefreshTap = function (evt) {
        app.showLoadingMessage();

        bc.core.getData("meetups", handleData, handleError);
    };

    var handleBackTap = function (evt) {
        bc.ui.backPage();
    };

    var renderIndexPage = function (meetups) {
        app.renderTemplate("calendar-index", "calendar-index", { "meetups": meetups });
    };

    var renderDetailPage = function (meetup) {
        app.renderTemplate("calendar-detail", "calendar-detail", { "meetup": meetup });

        bc.ui.forwardPage("#calendar-detail-page");
    };

    var getMeetups = function () {
        return bc.core.cache("meetups") || [];
    };

    var setMeetups = function (meetups) {
        bc.core.cache("meetups", meetups);
        bc.core.cache("meetups_saved_at", new Date().getTime());
    };

}