(function(Window) {
  "use strict";
  var App = window.App || {};

  function DataStore() {
    console.log("running the DataStore fuNction");
  }

  App.DataStore = DataStore;
  window.App = App;
})(window);
