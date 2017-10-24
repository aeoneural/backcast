var AppView = Backbone.View.extend({

  el: '#app',
  initialize: function() {
    // Goal: Render VideoPlayerView!
    this.videos = new Videos();
    this.VideoPlayerView = new VideoPlayerView();
    this.VideoListView = new VideoListView();
    this.VideoPlayerView.render();
    this.VideoListView.render();
    
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')
  
});
