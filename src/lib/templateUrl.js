
// DO NOT MODIFY THIS CODE -- unless you find a bug.

// Dynamically load HTML template files into the browser.
// This is a very simple loader, in some ways, similar to webpack

(function() {

  var promises = [];

  window.templateURL = function(src) {
    var template;

    // create a promise
    var defer = $.Deferred();
    defer.done(data => {
      template = _.template(data);
    });
    promises.push(defer);

    // create a node and load the src, then
    // resolve promise on successful load
    $('<script>').load(src, (data, status) => {
      defer.resolve(data);
    });

    return function() {
      if (!template) {
        console.error(`Template '${src}' failed to load`);
        return;
      }
      return template.apply(this, arguments);
    };
  };

  window.backboneReady = function(callback) {
    // wait for the dom ready event to fire
    // then wait for all the templates to load
    $(document).ready(() => $.when(...promises).then(callback));
  };

})();
