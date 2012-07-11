# File Download

This template demonstrates how to download, retrieve and delete files on disk 
using `bc.device.requestDownload()` and associated methods and events. These 
methods and events are abstracted in the `FileManager` function, which relies
on `bc.core.cache()` to store arbitrary metadata associated with each file.

This implementation is not authoritative, nor is it meant to demonstrate how
to create a fully offline application.

### Instantiating the FileManager object

Create a FileManager instance for the namespace "cat-pics":

``` javascript
var fm = new FileManager("cat-pics");
```

### Downloading a file

Specify a function to run when a download begins:

``` javascript
fm.onDownloadStart(function () {
    $("#spinner").show();
});
```

Specify a function to run on every progress event. The info object contains 
id (of file), bytesLoaded, bytesTotal, and percentLoaded:

``` javascript
fm.onDownloadProgress(function (info) {
    var pct = Math.floor(info.percentLoaded * 100);

    $("#progress").show().html(pct + "%");
});
```

Specify a function to run on a download error:

``` javascript
fm.onDownloadError(function (info) {
    bc.device.alert("Oh noes! Problem downloading " + info.url);
});
```

Specify a function to run when a download ends. The info object contains
id (of file), url, size, path, date, and metadata (an object)

``` javascript
fm.onDownloadEnd(function (info) {
    $("#spinner").hide();
    $("#progress").hide();

    renderCatPicture(info.path);
});
```

Download a file from a URL, specifying an ID (a string), optional metadata 
(an object), and optional progress interval (defaults to 5%):

``` javascript
var metadata = {
    "title": "Here kitty",
    "author": "Mrs. Meowington"
};

fm.downloadFile("http://cats.com/kitty1.jpg", "kitty1", metadata, 5);
```

### Retrieving a file

Retrieve a file in the "cat-pics" namespace:

``` javascript
var file = fm.getFile("kitty1");

renderCatPicture(file.path, file.metadata.author);
```

### Retrieving all files

Retrieve all files in the "cat-pics" namespace:

``` javascript
var files = fm.getFiles();

for (var f in files) {
    renderCatPicture(files[f].path, files[f].metadata.author);
}
```

### Deleting a file

Specify a function to run when a file is deleted. The info object contains
id, url, size, path, date and metadata (an object)

``` javascript
fm.onDeleteSuccess(function (info) {
    hideCatPicture(info.id);
});
```

Specify a function to run if a file cannot be deleted. The error object 
contains errorCode and errorMessage:

``` javascript
fm.onDeleteError(function (error) {
    bc.device.alert("Oops! " + error.errorMessage);
});
```

Delete one file in the "cat-pics" namespace:

``` javascript
fm.deleteFile("kitty1");
```

Delete multiple files in the "cat-pics" namespace:

``` javascript
fm.deleteFiles(["kitty1", "kitty2"]);
```

Delete all files in the "cat-pics" namespace:

``` javascript
fm.deleteAll();
```

## Notes on video loading and playback

This template loads MP4 video files via the [Brightcove Media API][1], then
injects them into a `<video>` element. It does not use the [Brightcove Smart
Player][2] or any other wrapper code to provide analytics, advertising, etc.

[1]: http://docs.brightcove.com/en/media/
[2]: http://support.brightcove.com/en/docs/delivering-video-html5-and-smart-players
