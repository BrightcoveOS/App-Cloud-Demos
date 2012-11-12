# Media Upload

This template demonstrates how to upload photos to a remote server using 
the methods and events of `bc.device.mediaUpload`.

## Core Concepts

* Prompting the user to select a photo from the photo library or camera
* Using `bc.device.mediaUpload.uploadMedia()` to initiate a file upload to a 
remote server
* Handing an upload error
* Handling `PROGRESS`, `COMPLETE` and `ERROR` events

## Usage

The test URL for this demo is `http://coffee.brightcove.com/demo/upload/upload.php`:

```php
<?php

$file = $_FILES["file"];

echo $("Server received {$file['name']} ({$file['size']})");

?>
```

This script does not attempt to authorize the request, nor does it save the 
uploaded image. Note, the maximum upload size for `coffee.brightcove.com` is 10MB.
