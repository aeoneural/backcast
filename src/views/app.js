var AppView = Backbone.View.extend({

  el: '#app',
  initialize: function() {
    // Goal: Render VideoPlayerView!
    this.videos = new Videos(window.exampleDataVideo);

  
    
    this.render();
  },


  render: function() {
    this.$el.html(this.template()); 
    new SearchView({ el: '.search'}).render();
    new VideoPlayerView({ el: '.player'}).render();
    new VideoListView({ el : '.list'}).render();

    return this;
  },

  template: templateURL('src/templates/app.html')
  
});
