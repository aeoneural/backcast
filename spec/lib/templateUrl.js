
// DO NOT MODIFY THIS CODE -- unless you find a bug.

// Stub version of dynamic loader for use in tests.

(function() {

  window.templateURL = function(src) {
    return function(data) {
      var html = `<h1>test template for: ${src}</h1>`;
      if (data) {
        html += '<ul>';
        for (var key in data) {
          html += `<li>${key}: <%= JSON.stringify(${key}) %></li>`;
        }
        html += '</ul>';
      }
      var template = _.template(html);
      return template.apply(this, arguments);
    };
  };

  window.backboneReady = function(callback) {
    $(document).ready(callback);
  };

})();
