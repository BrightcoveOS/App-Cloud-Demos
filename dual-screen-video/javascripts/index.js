$(bc).on(
  "init",
  function() {

    var selectedVideo,
        selectedPlaylist,
        hasExternalScreen,
        playing,
        playheadRange,
        dragging,
        seekedTo,
        playlists,
        video,
        videoProxy,
        currentPosition = 0,
        $playhead,
        $playheadTrackFilled,
        $positionLabel,
        $playButton,
        $video,
        
    // writes out the page HTML, initialized playlist data request
    renderPage = function(e, id) {
      var $page,
          html = "";
          classes = "singleScreen" + (hasExternalScreen ? " dualScreen" : ""),

      html += "<div id='videoPage'>";
      html +=   "<div id='videoBackground' class='" + classes + "' />";
      html +=   "<div id='videoControls' class='" + classes + "'/>";
      html +=   "<div id='videoInfo' class='" + classes + "'/>";
      html +=   "<div id='list' class='" + classes + "'/>";
      html +=   "<div id='tabs' class='" + classes + "'/>";
      html += "</div>";
      $page = $(html);
      $("body").append($page);

      fetchPlaylists();

    },
    
    // requests playlists from backend
    fetchPlaylists = function() {
      var scriptTag = document.createElement("script"),
          head = document.getElementsByTagName("head").item(0),
          apiPath = "http://api.brightcove.com/services/library",
          command = "find_playlists_by_ids",
          videoFields = "&video_fields=id,name,shortDescription,length,FLVURL,thumbnailURL,videoStillURL",
          playlistFields = "&playlist_fields=id,videos,name,shortDescription,thumbnailURL",
          deliveryType = "&media_delivery=http_ios",
          url = apiPath + "?command=" + command + "&playlist_ids=" + config.playlists +
                  playlistFields + videoFields + deliveryType + "&token=" + config.token;

      // once playlists come in, render out tabs
      window.onPlaylistsData = function(data) {
        window.onPlaylistsData = null;
        if (data.items) {
          if (data.items.length) {
            playlists = data.items;
            renderVideoControls();
            renderVideoInfo();
            renderTabs();
          } else {
            console.log("playlists not found");
          }
        } else {
          console.log("error loading playlists");
        }
      };

      // Add script object attributes
      scriptTag.setAttribute("type", "text/javascript");
      scriptTag.setAttribute("charset", "utf-8");
      scriptTag.setAttribute("src", url + "&callback=onPlaylistsData");
      scriptTag.setAttribute("id", "videoRequest");

      head.appendChild(scriptTag);
    },
    
    // writes HTML for tabs based on playlists, limit to 4 (and small names...)
    renderTabs = function() {
      var i,
          tabs,
          totalPlaylists = playlists.length,
          html = "",
          $selectedTab,
          $tabs = $("#tabs"),
          classes = "tab singleScreen" + (hasExternalScreen ? " dualScreen" : ""),
          
      // handler for when tab is clicked
      selectTab = function(tab, index, selectFirstVideo) {
        if ($selectedTab) {
          $selectedTab.removeClass("selectedTab");
        }
        $selectedTab = tab;
        $selectedTab.addClass("selectedTab");
        renderPlaylist(playlists[index], selectFirstVideo);
      };
      
      $tabs.empty();

      // NOTE: does not support scrolling tabs, so limit to 4
      for (i = 0; i < totalPlaylists, i < 4; i++) {
        html += "<div class='" + classes + "'>" + playlists[i].name + "</div>";
      }
      $tabs.append($(html));
      
      // add handler to each tab for click
      tabs = $tabs.find("div");
      for (i = 0; i < tabs.length; i++) {
        $(tabs[i]).bind(
          "click",
          (function(i) {
            return function(e) {
              selectTab($(e.currentTarget), i);
            };
          })(i)
        );
      }
      
      // select first tab
      selectTab($(tabs[0]), 0, true);
    },

    // writes HTML to page to render playlsit
    renderPlaylist = function(playlist, selectFirstVideo) {
      var i,
          $selectedItem,
          page = 0,
          videos = playlist.videos,
          totalVideos = videos.length,
          html = "",
          classes = "singleScreen" + (hasExternalScreen ? " dualScreen" : ""),
      
      // handler for clicking a list item
      selectItem = function(item, video, changeVideo) {
        if ($selectedItem) {
          $($selectedItem.find(".videoThumb")[0]).removeClass("selectedItem");
          $($selectedItem.find(".videoLabel")[0]).removeClass("selectedLabel");
        }
        $selectedItem = item;
        $($selectedItem.find(".videoThumb")[0]).addClass("selectedItem");
        $($selectedItem.find(".videoLabel")[0]).addClass("selectedLabel");
        if (changeVideo) {
          loadVideo(video);
        }
      };
      
      $("#list").empty();

      html += "<span class='label " + classes + "' id='playlistName'>" + playlist.name + "</span>";
      html += "<span class='label " + classes + "' id='playlistDescription'>" + playlist.shortDescription + "</span>";
      html += "<div class='navButton " + classes + "' id='previousButton' />";
      html += "<div id='outerVideosHolder' class='" + classes + "'>";
      html +=   "<div id='innerVideosHolder' class='" + classes + "'>";
      for (i = 0; i < totalVideos; i++) {
        html +=   "<div class='videoItem " + classes + "'>";
        html +=     "<div class='videoThumb'>";
        html +=       "<img src='" + videos[i].thumbnailURL + "' />";
        html +=     "</div>";
        html +=     "<div class='playOverlay' />";
        html +=     "<div class='videoLabel'>" + videos[i].name + "</div>";
        html +=   "</div>";
      }
      html +=   "</div>";
      html += "</div>";
      html += "<div class='navButton " + classes + "' id='nextButton' />";
      $("#list").append($(html));
      
      selectedPlaylist = playlist;

      // sets up all the handlers for scrolling, clicking, paging, etc.
      manageList(
        videos,
        hasExternalScreen ? 4 : 3,
        selectedVideo,
        selectItem,
        ".videoItem",
        $("#innerVideosHolder"),
        selectFirstVideo
      );

    },

    // writes HTML for video info
    renderVideoInfo = function() {
      var html = "",
          classes = "singleScreen" + (hasExternalScreen ? " dualScreen" : ""),
        
      html  =  "<div class='videoThumb " + classes + "'>";
      html +=    "<img id='videoThumb' />";
      html +=  "</div>";
      html +=  "<span id='nowPlaying' class='" + classes + "'>Now playing:</span>";
      html +=  "<span id='videoTitle' class='" + classes + "' />";
      html +=  "<span id='videoDescription' class='" + classes + "' />";
      $("#videoInfo").append($(html));

    },

    // writes HTML for video controls
    renderVideoControls = function() {
      var html = "",
          startDragX,
          startX,
          positionToSeekTo,
          classes = "singleScreen" + (hasExternalScreen ? " dualScreen" : ""),
        
      // handles clicks on playhead track, seeking in video
      seekToPosition = function(e) {
        var position,
            x = (e.originalEvent.targetTouches ? e.originalEvent.targetTouches[0].pageX : e.clientX);
        x -= $playheadFilledTrack.offset().left;
        position = x - $playhead.width()/2;
        setPlayhead(position);
        seekVideo(position/playheadRange*selectedVideo.length);
      },

      // handles dragging of playhead, updating text and colors
      setPlayhead = function(position) {
        var x = Math.max(0, Math.min(playheadRange, position));
        $playhead.css("left", x);
        $playheadFilledTrack.width(x + 10);
        $positionLabel.html(formatTime(x/playheadRange*selectedVideo.length));
      },

      // handles when playhead is initially clicked for a drag
      startPlayheadDrag = function(e) {
        if (dragging) return;
        dragging = true;
        startX = $playhead.position().left;
        startDragX = e.originalEvent.targetTouches ? e.originalEvent.targetTouches[0].pageX : e.clientX;
        document.body.focus();
        document.onselectstart = function () { return false; };
        $(document).bind("touchmove", handleDrag);
        $(document).bind("touchend", endPlayheadDrag);
      },

      // handles dragging of playhead, saving position to seek to (but not seeking)
      handleDrag = function(e) {
        var currentX = e.originalEvent.targetTouches ? e.originalEvent.targetTouches[0].pageX : e.clientX,
            delta = currentX - startDragX;

        positionToSeekTo = startX + delta;
        setPlayhead(positionToSeekTo);
      },

      // handles releasing fo playhead after drag, seeking to position in video
      endPlayheadDrag = function(e) {
        dragging = false;
        $(document).unbind("touchmove", handleDrag);
        $(document).unbind("touchend", endPlayheadDrag);
        document.onselectstart = function () { return true; };
        seekVideo(positionToSeekTo/playheadRange*selectedVideo.length);
      };

      html  =  "<div id='playButton' class='upState' />";
      html +=  "<div class='timeLabel' id='positionLabel'>00:00</div>";
      html +=  "<div class='playheadHolder " + classes + "'><div id='playheadTrack' /><div id='playheadFilledTrack' /><div id='playhead' /></div>";
      html +=  "<div class='timeLabel' id='durationLabel' />";
      $("#videoControls").append($(html));

      $playButton = $("#playButton");
      $playButton.css("background-image", "url(../images/play.png)");
      $playButton.bind(
        "touchstart",
        function(e) {
          $playButton.addClass("downState");
        }
      );
      $playButton.bind(
        "touchend",
        function(e) {
          playOrPauseVideo();
        }
      );

      $playhead = $("#playhead");
      $playhead.bind(
        "touchstart",
        startPlayheadDrag
      );
      $playheadFilledTrack = $("#playheadFilledTrack");
      $playheadFilledTrack.bind("click", seekToPosition);
      $("#playheadTrack").bind("click", seekToPosition);

      playheadRange = ($playheadFilledTrack.width() - $playhead.width());
      $playheadFilledTrack.width(0);

      $positionLabel = $("#positionLabel");
    },

    // updates video info and establishes proxy to video (HTML element or AirPlay)
    loadVideo = function(videoData) {

      currentPosition = 0;
      // videos after initial video should autoplay
      if (selectedVideo && video) {
        video.autoplay = true;
      }
      selectedVideo = videoData;

      $("#videoThumb").attr("src", selectedVideo.thumbnailURL);
      $("#videoTitle").html(selectedVideo.name);
      $("#videoDescription").html(selectedVideo.shortDescription);
      $("#durationLabel").html(formatTime(selectedVideo.length));

      playing = false;
      
      // these proxy calls to either the in-page video element or the App Cloud AirPlay API
      if (hasExternalScreen) {
        videoProxy = new ExternalVideoProxy();
        videoProxy.playVideo();
      } else {
        videoProxy = new VideoElementProxy();
      }

    },

    // handles paging, scrolling, selection of list items
    manageList = function(
      assets,
      assetsPerPage,
      selectedAsset,
      selectFunction,
      classOfItem,
      $innerContentHolder,
      selectFirstItem
    ) {
      var i,
          startClick,
          items,
          totalItems,
          $nextButton,
          $previousButton,
          $innerContentHolder,
          page = 0,
          totalAssets = assets.length,
          totalPages = Math.ceil(totalAssets/assetsPerPage),
      
      // changes button opacity based on the page in view
      enableNavigation = function() {
        if (totalPages == 1) {
          $previousButton.css("opacity", .3);
          $nextButton.css("opacity", .3);
        } else if (page == 0) {
          $previousButton.css("opacity", .3);
          $nextButton.css("opacity", 1);
        } else {
          $previousButton.css("opacity", 1);
          $nextButton.css("opacity", (page < totalPages-1) ? 1 : .3);
        }
      },

      // animates to the next page of items
      nextPage = function() {
        if (page == totalPages-1) return;
        page++;
        if (hasExternalScreen) {
          $innerContentHolder.animate({left:"-=844"}, 400);
        } else {
          $innerContentHolder.animate({top:"-=690"}, 400);
        }
        enableNavigation();
      },

      // animates to the previous page of items
      previousPage = function() {
        if (page == 0) return;
        page--;
        if (hasExternalScreen) {
          $innerContentHolder.animate({left:"+=844"}, 400);
        } else {
          $innerContentHolder.animate({top:"+=690"}, 400);
        }
        enableNavigation();
      };
      
      // handles scrolling of the list, monitoring start and end touch positions to determine swipes
      $innerContentHolder.bind(
        "touchstart",
        function(e) {
          var delta,
              touchHandler = function(e) {
                var x = e.originalEvent.targetTouches ? e.originalEvent.targetTouches[0].pageX : e.clientX,
                    y = e.originalEvent.targetTouches ? e.originalEvent.targetTouches[0].pageY : e.clientY;
                delta = (hasExternalScreen ? x : y) - startClick;
              },
              endTouchHandler = function(e) {
                if (Math.abs(delta) > 50) {
                  if (delta < 0) {
                    nextPage();
                  } else {
                    previousPage();
                  }
                }
                $(document).unbind("touchend", endTouchHandler);
                $(document).unbind("touchmove", endTouchHandler);
                e.preventDefault();
              };

          // we're looking for either horizontal or vertical numbers based on single/dual screen;
          // dual screen has a horizontal list while single screen has a vertical
          if (hasExternalScreen) {
            startClick = e.originalEvent.targetTouches ? e.originalEvent.targetTouches[0].pageX : e.clientX;
          } else {
            startClick = e.originalEvent.targetTouches ? e.originalEvent.targetTouches[0].pageY : e.clientY;
          }
          $(document).bind("touchend", endTouchHandler);
          $(document).bind("touchmove", touchHandler);
        }
      );

      // prevent default action on inner items to enable swiping
      items = $innerContentHolder.find("img,div");
      totalItems = items.length;
      for (i = 0; i < totalItems; i++) {
        $(items[i]).bind("touchstart", function(e) { e.preventDefault(); return true; });
      }

      // goes through items and adds handler for tap to select item
      items = $innerContentHolder.find(classOfItem);
      totalItems = items.length;
      for (i = 0; i < totalItems; i++) {
        item = $(items[i]);
        item.bind(
          "tap",
          (function(asset, item) {
            return function() {
              selectFunction(item, asset, true);
            };
          })(assets[i], item)
        );
        if (selectedAsset == assets[i]) {
          selectFunction(item, assets[i], false);
        }
      }

      $nextButton = $("#nextButton");
      $previousButton = $("#previousButton");
      $nextButton.bind("click", nextPage);
      $previousButton.bind("click", previousPage);
      enableNavigation();

      // for initial render, select first item in first list
      if (selectFirstItem) {
        selectFunction($(items[0]), assets[0], true);
      }
    },
    
    // toggles playback of video from button click
    playOrPauseVideo = function() {
      if (!selectedVideo) return;
      $playButton.removeClass("downState");
      if (video) video.autoplay = true;
      playing ? videoProxy.pauseVideo() : videoProxy.playVideo();
    },

    // seeks to specified position (milliseconds) in video
    seekVideo = function(position) {
      seekedTo = position/1000; // convert to seconds
      videoProxy.seekVideo(seekedTo);
    },
    
    // changes icon on play button based on playing state
    changePlayState = function() {
      if (playing) {
        $playButton.css("background-image", "url(../images/pause.png)");
      } else {
        $playButton.css("background-image", "url(../images/play.png)");
      }
    },
    
    // creates a timecode string from millisecond position
    formatTime = function(time) {
      var padDigit,
          minutes,
          seconds;

      time /= 1000;
      padDigit = function(digit) {
          return (digit >= 10) ? digit : "0" + digit;
      };
      minutes = padDigit(Math.floor(time / 60));
      seconds = padDigit(Math.floor(time % 60));

      return minutes + ":" + seconds;
    },

    // handles when the app goes into mirroring mode
    onExternalScreenConnected = function() {
      hasExternalScreen = true;
      $(".singleScreen").addClass("dualScreen");
      videoProxy = new ExternalVideoProxy();
      handleExternalScreenSwitch();
    },
    
    // handles when the app exits mirroring mode
    onExternalScreenDisconnected = function() {
      hasExternalScreen = false;
      $(".dualScreen").removeClass("dualScreen");
      videoProxy = new VideoElementProxy();
      handleExternalScreenSwitch();
    },

    // updates list and playhead based on new screen layout
    handleExternalScreenSwitch = function() {
      renderPlaylist(selectedPlaylist);
      playheadRange = ($(".playheadHolder").width() - $("#playhead").width());
      videoProxy.playVideo(currentPosition);
      handleVideoPlay();
      handleVideoProgress(currentPosition, selectedVideo.length/1000, true);
    },

    // handles when video element starts playing
    onVideoElementPlay = function() {
      if (!hasExternalScreen) handleVideoPlay();
    },
    
    // handles when video element pauses
    onVideoElementPause = function() {
      if (!hasExternalScreen) handleVideoPause();
    },

    // handles when external AirPlay video plays
    onExternalVideoPlaying = function() {
      if (hasExternalScreen) handleVideoPlay();
    },
    
    // handles when external AirPlay video pauses
    onExternalVideoPaused = function() {
      if (hasExternalScreen) handleVideoPause();
    },

    // changes playing flag and play button when video plays
    handleVideoPlay = function() {
      playing = true;
      changePlayState();
    },
    
    // changes playing flag and play button when video pauses
    handleVideoPause = function() {
      playing = false;
      changePlayState();
    },

    // handles when the video element completes, sending it to first frame and updating UI
    onVideoEnded = function() {
      seekVideo(0);
      $playhead.css("left", 0);
      $playheadFilledTrack.width(10);
      $positionLabel.html(formatTime(0));
    },

    // handles timeupdate event from video element, updating playhead and time
    onVideoTimeUpdate = function() {
      if (!hasExternalScreen) {
        handleVideoProgress(video.currentTime, video.duration || selectedVideo.length/1000);
      }
    },

    // handles progress event from external AirPlay video, updating playhead and time
    onExternalVideoProgress = function(e, result) {
      if (hasExternalScreen) {
        handleVideoProgress(result.currenttime, result.totaltime);
      }
    },

    // updates playhead and position timecode based on current time of the video
    handleVideoProgress = function(currentTime, totalTime, forceUpdate) {
      if ((!playing || dragging) && !forceUpdate) return;
      var position = currentTime/totalTime*playheadRange;
      currentPosition = currentTime;
      
      // if video duration is different from backend metadata, update to match
      if (totalTime != selectedVideo.length/1000) {
        selectedVideo.length = totalTime*1000;
        $("#durationLabel").html(formatTime(totalTime*1000));
      }
      if (!forceUpdate && !isNaN(seekedTo) && Math.abs(seekedTo-currentTime) > 8) {
        return;
      }
      seekedTo = undefined;
      $playhead.css("left", position);
      $playheadFilledTrack.width(position + 10);
      $positionLabel.html(formatTime(currentTime*1000));
    },

    // proxy to video element in HTML
    VideoElementProxy = function() {

      var $video = $("video"),
          $videoBackground = $("#videoBackground");

      // seeks to position in video
      this.seekVideo = function(position) {
        video.currentTime = position;
      };

      // starts video, possibly at a position other than 0
      this.playVideo = function(position) {
        var seekToPosition;
        video.play();
        // Unreliable and inconsistent due to how iOS pauses the video when the user 
        // opens the AirPlay controls. The issue is that when exiting dual screen, the iPad
        // will pause when the dual screen access control (on the bottom bar of iPad)
        // is closed, so although it might seek to the correct position initially,
        // once this bar is closed the video will pause and sometimes will result
        // in buggy subsequent behavior like returning to start, whereas if you don't attempt
        // to seek the video will continue playing normally. You can uncomment
        // the lines if seeking is more important despite bugginess. Also, if checking for seekable
        // and seekable.length and seekable.end() are removed, the video will
        // sometimes seek successfully and sometimes not, but seems to always play.
        /*
        if (!isNaN(position) && position > 0) {
          seekedTo = position;
          seekToPosition = function() {
            try {
              if (video.seekable && video.seekable.length && video.seekable.end() >= position) {
                video.currentTime = position;
                $video.unbind("timeupdate", seekToPosition);
              }
            } catch (e) {}
          };
          $video.bind("timeupdate", seekToPosition);
        }
        */
      };

      // pauses video
      this.pauseVideo = function() {
        video.pause();
      };

      if ($video.length == 0) {
        // AirPlay doesn't like turning back control to existing element
        // so make a new one
        $videoBackground.empty();
        $video = $("<video />");
        $videoBackground.append($video);
        $video.bind("play", onVideoElementPlay);
        $video.bind("pause", onVideoElementPause);
        $video.bind("ended", onVideoEnded);
        $video.bind("timeupdate", onVideoTimeUpdate);
        video = $video[0];

      }
      video.src = selectedVideo.FLVURL;
      video.poster = selectedVideo.videoStillURL;
    },

    // proxy to external AirPlay video through AppCloud API
    ExternalVideoProxy = function() {

      // get rid of in-page video element
      $("#videoBackground").empty();
      video = null;

      // seeks to position in video
      this.seekVideo = function(position) {
        bc.device.externalscreen.seekVideo(position);
      };

      // starts video, possibly at a position other than 0
      this.playVideo = function(position) {
        var options = !isNaN(position) ? {timecode:Math.round(position)} : null;
        bc.device.externalscreen.playVideo(
          selectedVideo.FLVURL,
          function(e) {},
          function(e) {},
          options
        );
      };

      // pauses video
      this.pauseVideo = function() {
        bc.device.externalscreen.pauseVideo();
      };

    };

    // bind to all the external screen events
    $(bc).bind("externalscreenconnected", onExternalScreenConnected);
    $(bc).bind("externalscreendisconnected", onExternalScreenDisconnected);
    $(bc).bind("externalscreenvideoplaying", onExternalVideoPlaying);
    $(bc).bind("externalscreenvideopaused", onExternalVideoPaused);
    $(bc).bind("externalscreenvideoend", onVideoEnded);
    $(bc).bind("externalscreenvideoprogress", onExternalVideoProgress);

    bc.device.setAutoRotateDirections( 
        [bc.ui.orientation.LANDSCAPE_LEFT, bc.ui.orientation.LANDSCAPE_RIGHT],
        function() {},
        function() {}
    );

    renderPage();

  }

);