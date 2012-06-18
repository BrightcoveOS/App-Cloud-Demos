# Authentication and Authorization

This template demonstrates _one way_ to implement authentication and 
authorization via a REST API.

## Core Concepts

* **Authentication:** Using `bc.device.postDataToURL()` to send user 
credentials to a server and receive a postive or negative response in return, 
then storing the authentication data in the cache for later use
* **Authorization:** Using a token provided by the server (during 
authentication) to authorize subsequent requests for content

_This demo uses HTTP, not HTTPS. For extra security, use HTTPS in your app._

## Logging in (Authentication)

This template uses a `<form>` to capture a username and password. When the user 
clicks "Submit," the credentials are read via JavaScript and POSTed to a server 
via `bc.device.postDataToURL()`. The server returns the following JSON response 
for a valid login:

``` javascript
{
    "username": "apple",
    "authenticated": true,
    "token": "1234567890",
    "expires": 1339596887000
}
```

This object is saved to the cache for later use.

The server returns the following JSON response for an invalid login:

``` javascript
{
    "authenticated": false
}
```

In this demo, the only acceptable credentials are "apple" and "orange".

## Permitting access to content (Authorization)

When a request for data is made via `bc.device.fetchContentsOfURL()`, the 
value of "token" is passed as a parameter to the URL. For example:

```
http://www.example.com/some/content?token=1234567890
```

The server, in turn, authorizes or denies the request. If the token is valid
and _not expired_, the server returns a data response as JSON. Otherwise, the 
server denies the request:

``` javascript
{
    "authorized": false
}
```

In this demo, the value of token is always "1234567890" and it lives for one 
week. The client will ensure the token is not expired before making a content 
request.

## Logging out

When the user clicks "Log Out," the cached value of "expires" is set to 0 
and the login form is re-presented.

## Previewing in Chrome

This template makes cross-domain requests via `bc.device` methods. To preview
it in Chrome, start your browser from the command line with web security 
disabled:

```
/Applications/Google Chrome.app/Contents/MacOS/Google Chrome --disable-web-security
```

## Other notes

This template has a single view, but the core logic can be extracted to support
a multi-view scenario.

KNOWN ISSUE: JSON responses with the content type "application/json" trigger 
the error callback in bc.device.postContentsToURL(). For now, use "text/plain"
(6/6/2012).
