# Internationalization (i18n)

This template demonstrates how to externalize language strings in the HTML layer
using JavaScript templates, properties files, and parameterized content feeds.

## Core Concepts

* Using [Markup.js][1] to generate HTML on the fly from strings stored in external
text files
* Using Markup.js to populate the UI with language-specific strings (also stored
in external text files)
* Loading language-specific content by passing a language code to a 
[parameterized content feed][2]

## Usage

To change the language, first update the language code on line 1 of app.js. 
Acceptable values for this demo are "en", "es" and "ja".

Then specify the appropriate locale file in manifest.json (defaults to
`./txt/locales/en.txt`).

The content feed defined in manifest.json points to [Google News RSS][3]. If you
create your own copy of this feed in App Cloud Studio, replace `hl=en` with 
`hl={"lang":"en"}`.

Note, native UI components (e.g. navigation icons) cannot be translated at this
time.

[1]: https://github.com/adammark/Markup.js
[2]: http://docs.brightcove.com/en/app-cloud/using-parameters-in-content-feed-urls
[3]: http://news.google.com/news?pz=1&cf=all&ned=us&hl=en&output=rss