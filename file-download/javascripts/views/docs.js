function DocsView() {
    // file manager for handling PDF files in the namespace "briefcase"
    var fileManager = new FileManager("briefcase");

    // data for demo purposes only. in a production app, store such data remotely
    var docs = [
        {
            id: "f1040",
            link: "http://www.irs.gov/pub/irs-pdf/f1040.pdf",
            title: "Form 1040"
        },
        {
            id: "f1040a",
            link: "http://www.irs.gov/pub/irs-pdf/f1040a.pdf",
            title: "Form 1040-A"
        },
        {
            id: "f1040ez",
            link: "http://www.irs.gov/pub/irs-pdf/f1040ez.pdf",
            title: "Form 1040-EZ"
        },
        {
            id: "f1040es",
            link: "http://www.irs.gov/pub/irs-pdf/f1040es.pdf",
            title: "Form 1040-ES"
        },
        {
            id: "f1040sa",
            link: "http://www.irs.gov/pub/irs-pdf/f1040sa.pdf",
            title: "Form 1040 Schedule A"
        },
        {
            id: "f1040sb",
            link: "http://www.irs.gov/pub/irs-pdf/f1040sb.pdf",
            title: "Form 1040 Schedule B"
        },
        {
            id: "f1040sc",
            link: "http://www.irs.gov/pub/irs-pdf/f1040sc.pdf",
            title: "Form 1040 Schedule C"
        },
        {
            id: "f1040sd",
            link: "http://www.irs.gov/pub/irs-pdf/f1040sd.pdf",
            title: "Form 1040 Schedule D"
        },
        {
            id: "f8949",
            link: "http://www.irs.gov/pub/irs-pdf/f8949.pdf",
            title: "Form 8949"
        },
        {
            id: "f1040sse",
            link: "http://www.irs.gov/pub/irs-pdf/f1040sse.pdf",
            title: "Form 1040 Schedule SE"
        },
        {
            id: "f1040x",
            link: "http://www.irs.gov/pub/irs-pdf/f1040x.pdf",
            title: "Form 1040-X"
        },
        {
            id: "fw2",
            link: "http://www.irs.gov/pub/irs-pdf/fw2.pdf",
            title: "Form W-2"
        },
        {
            id: "fw4",
            link: "http://www.irs.gov/pub/irs-pdf/fw4.pdf",
            title: "Form W-4"
        },
        {
            id: "fw9",
            link: "http://www.irs.gov/pub/irs-pdf/fw9.pdf",
            title: "Form W-9"
        },
        {
            id: "f941",
            link: "http://www.irs.gov/pub/irs-pdf/f941.pdf",
            title: "Form 941"
        },
        {
            id: "f1099msc",
            link: "http://www.irs.gov/pub/irs-pdf/f1099msc.pdf",
            title: "Form 1099-MISC"
        },
        {
            id: "f4868",
            link: "http://www.irs.gov/pub/irs-pdf/f4868.pdf",
            title: "Form 4868"
        },
        {
            id: "f8863",
            link: "http://www.irs.gov/pub/irs-pdf/f8863.pdf",
            title: "Form 8863"
        },
        {
            id: "f8917",
            link: "http://www.irs.gov/pub/irs-pdf/f8917.pdf",
            title: "Form 8917"
        }
    ];

    // initialize this view
    this.init = function () {
        initListeners();

        initFileManager();

        render("docs-content", "docs-index", { "docs": getDocs() });
    };

    // refresh this view when the user enters it
    this.refresh = function () {
        fileManager.refresh();

        render("docs-content", "docs-index", { "docs": getDocs() });
    };

    // get a list of available documents. for each, determine if downloaded
    var getDocs = function () {
        for (var i in docs) {
            docs[i].downloaded = fileManager.getFile(docs[i].id) !== undefined;
        }

        return docs;
    };

    // initialize tap handlers
    var initListeners = function () {
        $("body")
            .on("tap", ".back-btn", handleBackTap)
            .on("tap", ".pdf-btn", handleDocTap)
            .on("tap", ".add-btn", handleSaveTap);
    };

    // set file manager callbacks
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

    // go back!
    var handleBackTap = function (evt) {
        bc.ui.backPage();
    }

    // open a PDF, either from disk or the network, in a modal window
    var handleDocTap = function (evt) {
        var id = this.getAttribute("data-doc-id");
        var file = fileManager.getFile(id);

        // load from either disk or network
        var url = file ? file.path : this.getAttribute("data-doc-link");

        bc.device.openURI(url, undefined, undefined, { modalWebBrowser: true } );
    };

    // save a PDF to disk
    var handleSaveTap = function (evt) {
        var url = this.getAttribute("data-doc-link");
        var id = this.getAttribute("data-doc-id");
        var docTitle = this.getAttribute("data-doc-title");

        var metadata = {
            "type": "doc",
            "title": docTitle
        };

        var interval = 5;

        fileManager.downloadFile(url, id, metadata, interval);

        var txt = bc.context.os === "ios" ? "0%" : "Downloading ...";
        $("#progress-" + id).html(txt);
    };

}