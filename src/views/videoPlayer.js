var VideoPlayerView = Backbone.View.extend({
  
  initialize: function() { 
    this.listenTo(this.collection, 'select', this.selectVideo);
    this.selectVideo(this.collection.at(0));
  },
  
  selectVideo: function(video) { 
    this.model = video; 
    this.render();
  },
  
  render: function() {
    // this.$el.html('<div class="loading">Please wait...</div>');
    
    this.$el.html(this.template(this.model.attributes));

    return this;
  },
 

  template: templateURL('src/templates/videoPlayer.html')
  

});
