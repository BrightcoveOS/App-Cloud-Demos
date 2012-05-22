/*
 * Base functionality. Do not instantiate directly.
 */
function BlogView() {

    this.loadBlog = function (callback) {
        showLoading();

        var handleData = function (data) {
            callback(data);

            hideLoading();
        };

        var handleError = function (error) {
            console.log(error);
        };

        bc.core.getData("blog", handleData, handleError);
    };

    var showLoading = function () {
        document.getElementById("loading").style.opacity = 1;
    };

    var hideLoading = function () {
        document.getElementById("loading").style.opacity = 0;
    };

}



/*
 * Factory method for returning phone view or blog view.
 */
BlogView.factory = function () {
    return getDeviceType() === "phone" ? new PhoneBlogView() : new TabletBlogView();
};




/*
 * Phone functionality.
 */
function PhoneBlogView() {

    this.init = function () {
        this.loadBlog(handleData);

        $("li").live("tap", function (evt) {
            console.log("tapped phone item!");
        });
    };

    var handleData = function (data) {
        var template = bc.templates["phone-index"];
        var context = { "articles": data };
        var markup = Mark.up(template, context);

        document.getElementById("blog-results").innerHTML = markup;
    };
}

PhoneBlogView.prototype = new BlogView();




/*
 * Tablet functionality.
 */
function TabletBlogView() {

    this.init = function () {
        this.loadBlog(handleData);

        $("li").live("tap", function (evt) {
            console.log("tapped tablet item!");
        });
    };

    var handleData = function (data) {
        var template = bc.templates["tablet-index"];
        var context = { "articles": data };
        var markup = Mark.up(template, context);

        document.getElementById("blog-results").innerHTML = markup;
    };

}

TabletBlogView.prototype = new BlogView();
