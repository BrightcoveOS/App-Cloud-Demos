function VideoView() {
    var self = this;

    this.init = function () {
        bc.device.setAutoRotateDirections(["all"]);

        self.showLoading();

        self.loadTemplates("../txt/videos.txt", function() {
            bc.core.getData("videos", renderPlaylist, handleError);
        });
    };

    var renderPlaylist = function (data) {
        var template = self.getTemplate("playlist");
        var context = { playlists: data.items };
        var markup = Mark.up(template, context);

        document.getElementById("videos").innerHTML = markup;

        self.hideLoading();
    };

    var handleError = function (error) {
        console.log(error);
    };
}

VideoView.prototype = new View();
