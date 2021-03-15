'use strict';
var hideHeader = function(header) {
    header.css('text-indent', '-9999px');
};
var showHeader = function(header) {
    header.css('text-indent', '0px');
};
var animateHeader = function(header, text) {
    header.text("");
    var nextAnimationStep = function() {
        if (text.length > 0) {
            header.text(header.text() + text.substr(0, 1));
            text = text.substr(1);
            setTimeout(nextAnimationStep, 100);
        }
    };
    nextAnimationStep();
};
var animateHeaders = function(headers) {
    return Object.keys(headers).map(function(key, index) {
        var elementSelector = key;
        var offset = headers[key];
        var header = $(elementSelector);
        hideHeader(header);
        var waypoint = {};
        waypoint[key] = header.waypoint({
            handler: function() {
                showHeader(header);
                animateHeader(header, header.text());
                this.destroy();
            },
            offset: offset
        })[0];
        return waypoint;
    }).reduce(Object.assign, {});
};