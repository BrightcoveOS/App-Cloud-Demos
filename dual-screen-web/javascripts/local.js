// set up event listeners after the view is initialized
$(bc).on("init", function (evt) {

    $(".block").on("tap", function (evt) {
        var color = this.getAttribute("data-color");

        // see messageBroker.js
        messageBroker.postMessage("updateColor", [color]);

        $(".block").css("border", "4px solid white");

        $(this).css("border", "4px solid black");
    });

});

// when mirroring is enabled, immediately open the external web view
$(bc).on("externalscreenconnected", function (evt) {
    bc.device.externalscreen.openExternalWebView("html/remote.html",
        // success!
        function (evt) {
            displayConnectionState(true);
        },
        // error
        function (evt) {
            displayConnectionState(false);
        }
    );
});

// when mirroring is disabled, update the indicator in the UI
$(bc).on("externalscreendisconnected", function (evt) {
    displayConnectionState(false);
});

// update the status indicator in the UI
function displayConnectionState(connected) {
    if (connected) {
        $("#indicator").css("background-color", "#0C0").html("Connected");
    }
    else {
        $("#indicator").css("background-color", "#F00").html("Not Connected");
    }
}