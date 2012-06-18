function HomeView() {

    // service urls.  you should use HTTPS in your app
    var AUTH_URL = "http://coffee.brightcove.com/demo/auth/auth.php";
    var DATA_URL = "http://coffee.brightcove.com/demo/auth/data.php";

    // initialize this view
    this.init = function () {
        if (loggedIn()) {
            loadContent();
        }
        else {
            showLoginForm();
        }

        $("body").on("tap", "#logout-button", this.logout);
    };

    // authenticate the user
    this.login = function () {
        var creds = getFormCredentials();
        var opts = {
            "data": creds
        };

        // proceed only if both fields have values
        if (creds.username && creds.password) {
            showLoadingMessage();

            bc.device.postDataToURL(AUTH_URL, handleAuthResponse, handleAuthError, opts);
        }
    };

    // expire the user's authentication token and display the login form
    this.logout = function () {
        var user = bc.core.cache("auth");
        user.expires = 0;

        bc.core.cache("auth", user);

        showLoginForm();
    };

    // get the username and password from the form fields
    var getFormCredentials = function () {
        return {
            "username": $("#username").val(),
            "password": $("#password").val()
        };
    };

    // handle a valid response from the authentication request
    var handleAuthResponse = function (data) {
        // save the response in the cache
        bc.core.cache("auth", JSON.parse(data));

        // was it successful?
        if (loggedIn()) {
            // if so, proceed
            loadContent();
        }
        else {
            // otherwise try again
            showLoginWarning();
            hideLoadingMessage();
        }
    };

    // handle a comms error from the authentication request
    var handleAuthError = function (error) {
        bc.device.alert(error.errorMessage);
    };

    // show a warning on failed login
    var showLoginWarning = function () {
        $("#warning").fadeOut().empty().html("Oops! Invalid Login.").fadeIn();
    };

    // get a valid authentication token from the cache, or return null
    var getToken = function () {
        var user = bc.core.cache("auth") || {};
        var now = new Date().getTime();

        // if not expired
        if (user.expires > now) {
            return user.token;
        }

        return null;
    };

    // get the user's username from the cache, or return an empty string
    var getUsername = function () {
        var user = bc.core.cache("auth") || {};

        return user.username || "";
    };

    // does the user have a valid token?
    var loggedIn = function () {
        return getToken() !== null;
    };

    // display the login form with the current username (if exists)
    var showLoginForm = function () {
        var template = bc.templates["login-template"];
        var context = {
            "username": getUsername()
        };
        var markup = Mark.up(template, context);

        $("#content").html(markup);
        $("#logout-button").hide();

        // TODO move into bc.ui
        Scrollbox.get("content-scroll").top();
    };

    // load content from server
    var loadContent = function () {
        var url = DATA_URL + "?token=" + getToken();

        // make sure the user's token is still valid
        if (loggedIn()) {
            showLoadingMessage();

            bc.device.fetchContentsOfURL(url, handleContentResponse, handleContentError);
        }
        // otherwise kick out
        else {
            bc.device.alert("Oh noes! Your session expired. Please log in again.");

            showLoginForm();
        }
    };

    // handle data from a content request
    var handleContentResponse = function (data) {
        hideLoadingMessage();

        try {
            // in the Workshop, parse the response
            data = JSON.parse(data);
        }
        catch (e) {
        }

        // for good measure
        if (data.authorized === false) {
            bc.device.alert("No content for you!");
            return;
        }

        var template = bc.templates["results-template"];
        var context = { "results": data };
        var markup = Mark.up(template, context);

        $("#content").html(markup);
        $("#logout-button").show();
    };

    // handle a comms error from a content request
    var handleContentError = function (error) {
        bc.device.alert(error.errorMessage);
    };

    // show the "loading" message
    var showLoadingMessage = function () {
        $("#loading").css("opacity", 1);
    };

    // hide the "loading" message
    var hideLoadingMessage = function () {
        setTimeout(function () {
            $("#loading").css("opacity", 0);
        }, 500);
    };

}