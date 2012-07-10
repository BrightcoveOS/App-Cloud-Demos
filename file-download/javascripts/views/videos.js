function VideosView() {
    var fileManager = new FileManager("briefcase");

    this.init = function () {
        initListeners();

        initFileManager();

        preload();

        loadData();
    };

    this.refresh = function () {
        fileManager.refresh();
    };

    var initListeners = function () {
        $("body")
            .on("tap", ".back-btn", handleBackTap)
            .on("tap", "#playlists li", handlePlaylistTap)
            .on("tap", "#playlist li", handleVideoTap)
            .on("tap", ".add-btn", handleSaveTap);

        $(bc).on("viewblur", pauseVideo);
    };

    var initFileManager = function () {
        fileManager.onDownloadStart(function () {
        });

        fileManager.onDownloadError(function (info) {
            bc.device.alert("Oops!");
        });

        // ios only
        fileManager.onDownloadProgress(function (info) {
            var pct = Math.floor(info.percentLoaded * 100);

            $("#progress-" + info.id).show().html(pct + "%");
        });

        fileManager.onDownloadEnd(function (info) {
            setTimeout(function () {
                $("#btn-add-" + info.id).fadeOut();
                $("#progress-" + info.id).fadeOut();
                $("#saved-" + info.id).delay(500).fadeIn();
            }, 350);
        });

        fileManager.onDeleteSuccess(function (info) {
            $("#btn-add-" + info.id).show();

            $("#btn-remove-" + info.id).hide();
        });

        fileManager.onDeleteError(function (error) {
            bc.device.alert("Oops! " + error.errorMessage);
        });
    };

    var preload = function () {
        var data = bc.core.cache("videos");

        if (data) {
            render("playlists-content", "video-index", { "playlists": data.items })
        }
    };

    var loadData = function () {
        showLoadingMessage();

        bc.core.getData("videos", handleDataLoad, handleDataError);
    };

    var handleDataLoad = function (data) {
        bc.core.cache("videos", data);

        render("playlists-content", "video-index", { "playlists": data.items })

        hideLoadingMessage();
    };

    var handleSaveTap = function (evt) {
        var videoId = this.getAttribute("data-video-id");
        var videoTitle = this.getAttribute("data-video-title");
        var url = this.getAttribute("data-video-url");

        var metadata = {
            "type": "video",
            "title": videoTitle,
            "videoId": videoId
        };
        var interval = 1;

        fileManager.downloadFile(url, videoId, metadata, interval);

        var txt = bc.context.os === "ios" ? "0%" : "Downloading ...";
        $("#progress-" + videoId).html(txt);
    };

    var handleDataError = function (error) {
        console.log(error);
    };

    var handlePlaylistTap = function (evt) {
        var playlist = getPlaylist(this.getAttribute("data-result-id"))

        render("playlist-header", "video-subhead", { "subtitle": playlist.name });
        render("playlist-content", "video-playlist", { "videos": playlist.videos });

        bc.ui.forwardPage($("#playlist-page"));
    };

    var handleVideoTap = function (evt) {
        var video = getVideo(this.getAttribute("data-result-id"));

        render("video-header", "video-subhead", { "subtitle": video.name });
        render("video-content", "video-detail", { "video": video });

        loadVideo(video.id);

        bc.ui.forwardPage($("#video-page"));
    };

    var handleBackTap = function (evt) {
        pauseVideo(evt);

        bc.ui.backPage();
    };

    var pauseVideo = function (evt) {
        var video = document.getElementById("player");

        if (video) {
            video.pause();
        }
    };

    var loadVideo = function (videoId) {
        var file = fileManager.getFile(videoId);

        if (file) {
            playVideoFromFile(videoId, file);
        }
        else {
            playVideoFromNetwork(videoId);
        };
    };

    var playVideoFromFile = function (videoId, file) {
        var video = document.getElementById("player");
        video.src = file.path;

        $("#saved-" + videoId).show();
    };

    var playVideoFromNetwork = function (videoId) {
        showLoadingMessage();

        var handleVideoLoad = function (data) {
            try {
                data = JSON.parse(data);
            }
            catch (e) {
            }

            var video = document.getElementById("player");
            video.src = data.FLVURL;
            video.addEventListener("loadstart", function (evt) {
                hideLoadingMessage();
            });

            $("#btn-add-" + videoId).attr("data-video-url", video.src).show();
        };

        bc.device.fetchContentsOfURL(getVideoURL(videoId), handleVideoLoad, handleDataError);
    };

    var getVideoURL = function (videoId) {
        return "http://api.brightcove.com/services/library"
            + "?command=find_video_by_id"
            + "&token=SAMmT0d4gY-o3QN2rkGxNGlViIUrDKUY_a_FbrQqXXFq1HFyv44owg.."
            + "&media_delivery=HTTP"
            + "&fields=FLVURL"
            + "&video_id=" + videoId;
    };

    var getPlaylist = function (playlistId) {
        var data = bc.core.cache("videos");

        for (var i in data.items) {
            if (data.items[i].id == playlistId) {
                return data.items[i];
            }
        }

        return {};
    };

    var getVideo = function (videoId) {
        var data = bc.core.cache("videos");

        for (var i in data.items) {
            for (var j in data.items[i].videos) {
                if (data.items[i].videos[j].id == videoId) {
                    return data.items[i].videos[j];
                }
            }
        }

        return {};
    };
}