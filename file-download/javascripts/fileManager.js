/*

Download, retrieve and delete files for a given namespace, e.g. "docs". 

Initializing
------------

    var fm = new FileManager("cat-pics");


Downloading a file
------------------

Specify a function to run when a download begins:

    fm.onDownloadStart(function () {
        $("#spinner").show();
    });


Specify a function to run on every progress event. The info object contains 
id (of file), bytesLoaded, bytesTotal, and percentLoaded:

    fm.onDownloadProgress(function (info) {
        var pct = Math.floor(info.percentLoaded * 100);

        $("#progress").show().html(pct + "%");
    });


Specify a function to run on a download error:

    fm.onDownloadError(function (info) {
        bc.device.alert("Oh noes! Problem downloading " + info.url);
    });


Specify a function to run when a download ends. The info object contains
id (of file), url, size, path, date, and metadata (an object)

    fm.onDownloadEnd(function (info) {
        $("#spinner").hide();
        $("#progress").hide();

        renderCatPicture(info.path);
    });


Download a file from a URL, specifying an ID (a string), optional metadata 
(an object), and optional progress interval (defaults to 5%):

    var metadata = {
        "title": "Here kitty",
        "author": "Mrs. Meowington"
    };

    fm.downloadFile("http://cats.com/kitty1.jpg", "kitty1", metadata, 5);


Retrieving a file
-----------------

Retrieve a file in the "cat-pics" namespace:

    var file = fm.getFile("kitty1");

    renderCatPicture(file.path, file.metadata.author);


Retrieving all files
--------------------

Retrieve all files in the "cat-pics" namespace:

    var files = fm.getFiles();

    for (var f in files) {
        renderCatPicture(files[f].path, files[f].metadata.author);
    }


Deleting a file
---------------

Specify a function to run when a file is deleted. The info object contains
id, url, size, path, date and metadata (an object)

    fm.onDeleteSuccess(function (info) {
        hideCatPicture(info.id);
    });


Specify a function to run if a file cannot be deleted. The error object 
contains errorCode and errorMessage:

    fm.onDeleteError(function (error) {
        bc.device.alert("Oops! " + error.errorMessage);
    });


Delete one file in the "cat-pics" namespace:

    fm.deleteFile("kitty1");


Delete multiple files in the "cat-pics" namespace:

    fm.deleteFiles(["kitty1", "kitty2"]);


Delete all files in the "cat-pics" namespace:

    fm.deleteAll();

*/

function FileManager(namespace) {

    // callback functions (private)
    var _startHandler = function () {};
    var _errorHandler = function () {};
    var _progressHandler = function () {};
    var _endHandler = undefined;
    var _deleteSuccessHandler = function () {};
    var _deleteErrorHandler = function () {};

    // transient download data (private)
    var _metadata = {};

    // local copy of cache (private)
    var _cache = {};

    // modified state of local copy of cache (private)
    var _dirty = true;

    // get cached metadata (private)
    var getCache = function () {
        if (_dirty) {
            _cache = bc.core.cache(namespace) || {};
            _dirty = false;
        }

        return _cache;
    };

    // set metadata in cache (private)
    var setCache = function (cache) {
        bc.core.cache(namespace, cache);
        _dirty = true;
    };

    // set a function to run on the start of a download
    this.onDownloadStart = function (startHandler) {
        // no data is provided on callback
        _startHandler = startHandler;
    };

    // set a function to run on a download error
    this.onDownloadError = function (errorHandler) {
        // an info object is provided on callback
        _errorHandler = errorHandler;
    };

    // set a function to run at defined progress interval
    this.onDownloadProgress = function (progressHandler) {
        // an info object is provided on callback
        _progressHandler = function (evt, data) {
            // bug. should be data.info.downloadID
            var id = data.downloadID.substr(namespace.length + 1);
            var info = {
                "bytesLoaded": data.progress,
                "bytesTotal": data.expected,
                "percentLoaded": data.progress / data.expected,
                "id": id
            };

            progressHandler(info);
        };
    };

    // set a function to run when a download ends
    this.onDownloadEnd = function (endHandler) {
        // an info object is provided on callback
        _endHandler = function (evt, data) {
            var id = data.info.downloadID.substr(namespace.length + 1);

            var info = {};
            info.id = id;
            info.url = data.info.resource;
            info.size = data.info.size;
            info.path = data.info.fileURI;
            info.date = new Date();
            info.metadata = _metadata[id];

            var cache = getCache();
            cache[id] = info;

            setCache(cache);

            endHandler(info);
        };
    };

    // set a function to run when a file is deleted
    this.onDeleteSuccess = function (deleteSuccessHandler) {
        // an info object is provided on callback
        _deleteSuccessHandler = deleteSuccessHandler;
    };

    // set a function to run on a delete error
    this.onDeleteError = function (deleteErrorHandler) {
        // an error object is provided on callback
        _deleteErrorHandler = deleteErrorHandler;
    };

    // download a file and attach optional metadata (an object)
    this.downloadFile = function (url, id, metadata, interval) {
        if (!_endHandler) {
            this.onDownloadEnd(function () {});
        }

        var onInit = function () {
            _metadata[id] = metadata || {};

            _startHandler();
        };

        var onError = function (error) {
            bc.device.alert("Oops! " + error.errorMessage);
        };

        var opts = {
            "progressInterval": interval || 5
        };

        // if has title, display it in Android
        if (metadata.title) {
            opts.downloadTitle = metadata.title;
        }

        // id on disk = "namespace.id"
        bc.device.requestDownload(url, namespace + "." + id, onInit, onError, opts);
    };

    // delete a downloaded file by ID
    this.deleteFile = function (id) {
        var onDelete = function (id) {
            id = id.substr(namespace.length + 1);

            var cache = getCache();
            var info = cache[id];

            delete cache[id];

            setCache(cache);

            _deleteSuccessHandler(info);
        };

        // id on disk = "namespace.id"
        bc.device.removeDownload(namespace + "." + id, onDelete, _deleteErrorHandler);
    };

    // delete one or more downloaded files by ID (an array)
    this.deleteFiles = function (ids) {
        for (var i in ids) {
            this.deleteFile(id);
        }
    };

    // delete all downloaded files in this container
    this.deleteAll = function () {
        var files = this.getFiles();

        for (var f in files) {
            this.deleteFile(files[f].id);
        }
    };

    // get information about a completely downloaded file, or return undefined
    this.getFile = function (id) {
        return (getCache())[id];
    };

    // get a list of completely downloaded files
    this.getFiles = function () {
        var toArray = function (obj) {
            var a = [];

            for (var i in obj) {
                a.push(obj[i]);
            }

            return a;
        };

        return toArray(getCache());
    };

    // force a cache reload if files may have been modified by another view
    this.refresh = function () {
        _dirty = true;
    };

    // listen for progress events
    $(bc).on("downloadprogress", function (evt, data) {
        _progressHandler(evt, data);
    });

    // listen for complete events
    $(bc).on("downloadcomplete", function (evt, data) {
        _endHandler(evt, data);
    });

    // listen for error events
    $(bc).on("downloaderror", function (evt, data) {
        _errorHandler(data.info);
    });

}
