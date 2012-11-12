function HomeView() {

    var SERVER_URL = "http://coffee.brightcove.com/demo/upload/upload.php";
    var progressElem;
    var resultElem;

    // initialize this view
    this.init = function () {
        // listen for tap events
        $("#get-from-camera").on("tap", getPictureFromCamera);
        $("#get-from-library").on("tap", getPictureFromLibrary);

        // listen for error, progress and complete events
        $(bc).on(bc.device.mediaUpload.events.ERROR, handleUploadError);
        $(bc).on(bc.device.mediaUpload.events.PROGRESS, handleUploadProgress);
        $(bc).on(bc.device.mediaUpload.events.COMPLETE, handleUploadComplete);

        // set pointers to some elements
        progressElem = document.getElementById("progress");
        resultElem = document.getElementById("result");
    };

    // take a new picture and upload
    var getPictureFromCamera = function (evt) {
        getPicture("camera", evt);
    };

    // get a picture from the photo library and upload
    var getPictureFromLibrary = function (evt) {
        getPicture("photoLibrary", evt);
    };

    // helper for takePicture/findPicture
    var getPicture = function (source, evt) {
        resultElem.style.display = "none";

        var rect = evt.currentTarget.getBoundingClientRect();
        var opts = {
            "source": source,
            "mediaType": ["images"],
            "rect": [rect.left, rect.top, rect.width, rect.height]
        };

        bc.device.mediaUpload.uploadMedia(SERVER_URL, handleTakePictureInit, handleTakePictureError, opts);
    };

    // handle uploadMedia() success
    var handleTakePictureInit = function () {
        showProgress();
    };

    // handle uploadMedia() error
    var handleTakePictureError = function (error) {
        if (error.errorCode !== bc.device.mediaUpload.errors.USER_CANCEL) {
            // there are many error codes, but we're handling all in the same way
            bc.device.alert(error.errorMessage + " (" + error.errorCode + ")");
        }
    };

    // handle an ERROR event during upload
    var handleUploadError = function (evt, data) {
        bc.device.alert(data.info.error);
    };

    // handle a PROGRESS event
    var handleUploadProgress = function (evt, data) {
        updateProgress(data.info.progress / data.info.expected);
    };

    // handle a COMPLETE event
    var handleUploadComplete = function (evt, data) {
        resultElem.style.display = "block";
        resultElem.innerHTML = data.info.response;

        hideProgress();
    };

    // show the progress indicator
    var showProgress = function () {
        progressElem.style.opacity = "1";
    };

    // update the progress indicator
    var updateProgress = function (pct) {
        progressElem.innerHTML = Math.round(100 * pct) + "%";
    };

    // hide the progress indicator
    var hideProgress = function () {
        updateProgress(1.0);

        setTimeout(function () {
            progressElem.style.opacity = "0";
        }, 1000);
    };

}