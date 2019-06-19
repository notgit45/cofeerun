(function (window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;
    function FormHandler() {
        if (!selector) {
            throw new Error('No selector provided');
        }
    }
    var FormHandler = App.FormHandler;
    window.App = App;
})(window);