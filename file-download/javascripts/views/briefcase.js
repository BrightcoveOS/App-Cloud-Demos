function BriefcaseView() {
    // file manager for the namespace "briefcase" (holds PDF and MP4 files)
    var fileManager = new FileManager("briefcase");

    // initialize this view
    this.init = function () {
        initListeners();

        initFileManager();

        renderBriefcase();
    };

    // refresh this view when the user enters it
    this.refresh = function () {
        fileManager.refresh();

        renderBriefcase();
    };

    // render the view
    var renderBriefcase = function () {
        var docs = getFilesByType("doc");
        var videos = getFilesByType("video");

        var context = {
            "docs": docs,
            "videos": videos
        };

        render("briefcase-content", "briefcase-index", context);
    };

    // get downloaded files by type ("doc" or "video")
    var getFilesByType = function (type) {
        var files = fileManager.getFiles("briefcase");
        var result = [];

        for (var f in files) {
            if (files[f].metadata.type === type) {
                result.push(files[f]);
            }
        }

        return result;
    };

    // initialize tap handlers
    var initListeners = function () {
        $("body")
            .on("tap", ".meta", handleViewTap)
            .on("tap", ".icon-trash", handleDeleteTap);
    };

    // set file manager callbacks
    var initFileManager = function () {
        fileManager.onDeleteSuccess(function (info) {
            $("li[data-download-id=" + info.id + "]").fadeOut();
        });

        fileManager.onDeleteError(function (error) {
            bc.device.alert("Oops! " + error.errorMessage);
        });
    };

    // view a downloaded document or video in a modal window
    var handleViewTap = function (evt) {
        var path = this.getAttribute("data-path");

        bc.device.openURI(path, undefined, undefined, { modalWebBrowser: true } );
    };

    // delete a downloaded document or video
    var handleDeleteTap = function (evt) {
        var id = this.getAttribute("data-download-id");

        fileManager.deleteFile(id);

        return false;
    };

}