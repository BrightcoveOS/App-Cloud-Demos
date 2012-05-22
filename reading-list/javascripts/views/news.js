function NewsView() {

    var articles = [];
    var mode = "latest";

    this.init = function () {
        showLoading();

        initListeners();

        loadNews();
    };

    var initListeners = function () {
        $("#latest-button").bind("tap", function (evt) {
            if (mode !== "latest") {
                mode = "latest";
                renderNews();
                $("#nav button").toggleClass("on");
            }
        });

        $("#reading-list-button").bind("tap", function (evt) {
            if (mode != "favorites") {
                mode = "favorites";
                renderFavorites();
                $("#nav button").toggleClass("on");
            }
        });

        $(".add-remove-button").live("tap", function (evt) {
            var guid = this.getAttribute("data-result-id");
            var elem = $(this);

            if (isFavorite(guid)) {
                removeFromFavorites(guid);
                elem.html("Save");
            }
            else {
                addToFavorites(guid);
                elem.html("Saved!");
            }

            elem.toggleClass("favorite");
        });

        $(".remove-button").live("tap", function (evt) {
            var guid = this.getAttribute("data-result-id");

            removeFromFavorites(guid);

            $("li[data-result-id='" + guid + "']").fadeOut();
        });

        $("#save-all-button").live("tap", function (evt) {
            addAllToFavorites();
        });

        $("#clear-all-button").live("tap", function (evt) {
            removeAllFromFavorites();
        });
    };

    var loadNews = function () {
        var handleData = function (data) {
            articles = data;

            renderNews();

            hideLoading();
        };

        var handleError = function (error) {
            bc.device.alert(error.errorMessage || "Oops!");
        };

        bc.core.getData("google-news", handleData, handleError);
    };

    var renderNews = function () {
        setCount(getFavorites().length);

        for (var i in articles) {
            articles[i].favorite = isFavorite(articles[i].guid);
        }

        var template = bc.templates["articles"];
        var context = { articles: articles };
        var markup = Mark.up(template, context);

        $("#results").html(markup);
    };

    var renderFavorites = function () {
        var template = bc.templates["favorites"];
        var context = { favorites: getFavorites() };
        var markup = Mark.up(template, context);

        $("#results").html(markup);
    };

    var getFavorites = function () {
        return bc.core.cache("favorites") || [];
    };

    var setFavorites = function (favorites) {
        bc.core.cache("favorites", favorites);
    };

    var isFavorite = function (guid) {
        var favorites = getFavorites();

        for (var i in favorites) {
            if (favorites[i].guid === guid) {
                return true;
            }
        }

        return false;
    };

    var getArticle = function (guid) {
        for (var i in articles) {
            if (articles[i].guid === guid) {
                return articles[i];
            }
        }

        return null;
    };

    var addToFavorites = function (guid) {
        var favorites = getFavorites();

        if (!isFavorite(guid)) {
            favorites.push(getArticle(guid));
        }

        setFavorites(favorites);

        setCount(favorites.length);
    };

    var addAllToFavorites = function () {
        for (var i in articles) {
            if (!isFavorite(articles[i].guid)) {
                addToFavorites(articles[i].guid);
            }
        }

        $(".add-remove-button").html("Saved!").addClass("favorite");
    };

    var removeFromFavorites = function (guid) {
        var favorites = getFavorites();

        for (var i in favorites) {
            if (favorites[i].guid === guid) {
                favorites.splice(i, 1);
                break;
            }
        }

        setFavorites(favorites);

        setCount(favorites.length);
    };

    var removeAllFromFavorites = function (guid) {
        bc.core.cache("favorites", []);

        $("ul").hide();

        $("#warn").show();

        setCount(0);
    };

    var setCount = function (count) {
        $("#reading-list-count").html(count);

        $("#clear-all-button").toggle(count > 0);
    };

    var showLoading = function () {
        $("#loading").css("opacity", 1);
    };

    var hideLoading = function () {
        $("#loading").css("opacity", 0);
    };

}
