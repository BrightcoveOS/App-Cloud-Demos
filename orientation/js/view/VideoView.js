function VideoView() {

    this.init = function () {
        showLoading();

        bc.core.getData("videos", handleData, handleError);
    };

    var handleData = function (data) {
        renderPlaylist(data);

        hideLoading();
    };

    var handleError = function (error) {
        console.log(error);
    };

    var renderPlaylist = function (data) {
        var template = bc.templates["video-grid-template"];
        var context = { playlists: data.items };
        var markup = Mark.up(template, context);

        document.getElementById("video-grid").innerHTML = markup;
    };

    var showLoading = function () {
        document.getElementById("loading").style.opacity = 1;
    };

    var hideLoading = function () {
        document.getElementById("loading").style.opacity = 0;
    };

}
