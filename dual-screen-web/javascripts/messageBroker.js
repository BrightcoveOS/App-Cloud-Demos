/*
* This file provides a simple interface for sending and receiving
* messages between two screens.
*
* messageBroker.postMessage(method, parameters) takes a method name 
* and an array of parameters and will transform these into JSON
* for transfer to the second screen.
*
* messageBroker.receiveMessage(message) will receive the JSON and
* invoke the method defined, if it exists on the window object,
* passing in the parameters.
*/
var messageBroker = {
    
    postMessage: function (method, parameters) {
        var json = {
            method: method,
            parameters: parameters || []
        };
        bc.device.externalscreen.postMessage(encodeURIComponent(JSON.stringify(json)));
    },
    
    receiveMessage: function (message) {
        var json = JSON.parse(decodeURIComponent(message));

        try {
            window[json.method].apply(window, json.parameters);
        } catch (e) {
        }
    }
    
};

$(bc).on("externalscreenpostmessage", function(evt, result) {
    messageBroker.receiveMessage(result.message);
});
