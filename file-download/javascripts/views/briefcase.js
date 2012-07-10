function BriefcaseView() {
    var fileManager = new FileManager("briefcase");

    this.init = function () {
        initListeners();

        initFileManager();

        renderBriefcase();
    };

    this.refresh = function () {
        fileManager.refresh();

        renderBriefcase();
    };

    var renderBriefcase = function () {
        var docs = getFilesByType("doc");
        var videos = getFilesByType("video");

        var context = {
            "docs": docs,
            "videos": videos
        };

        render("briefcase-content", "briefcase-index", context);
    };

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

    var initListeners = function () {
        $("body")
            .on("tap", ".meta", handleViewTap)
            .on("tap", ".icon-trash", handleDeleteTap);
    };

    var initFileManager = function () {
        fileManager.onDeleteSuccess(function (info) {
            $("li[data-download-id=" + info.id + "]").fadeOut();
        });

        fileManager.onDeleteError(function (error) {
            bc.device.alert("Oops! " + error.errorMessage);
        });
    };

    var handleViewTap = function (evt) {
        var path = this.getAttribute("data-path");

        bc.device.openURI(path, undefined, undefined, { modalWebBrowser: true } );
    };

    var handleDeleteTap = function (evt) {
        var id = this.getAttribute("data-download-id");

        fileManager.deleteFile(id);

        return false;
    };

}