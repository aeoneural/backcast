var VideoListView = Backbone.View.extend({

  
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.each(this.renderVideo, this);
    
    return this;
  },
  renderVideo: function(video) { 
    
    // using el at the end because we want to append an html element which comes from the videolistentryview
    this.$('.video-list').append(new VideoListEntryView({ model: video }).render().el);
  },

  template: templateURL('src/templates/videoList.html')

});
