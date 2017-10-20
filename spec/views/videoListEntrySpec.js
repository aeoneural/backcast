describe('VideoListEntryView', function() {
  var model, view;

  beforeEach(function() {
    model = new Video(fakeVideoData[0]);
    sinon.spy(model, 'select');

    view = new VideoListEntryView({ model: model });
    view.template = _.template('<div class="video-list-entry-title"><%= snippet.title %></div>');
    view.render();  // re-render with test template
  });

  it('should render a video\'s content', function() {
    expect(view.el).to.match(new RegExp(model.attributes.title));
  });

  it('should call select on the model when the title is clicked', function() {
    view.$('.video-list-entry-title').click();
    expect(model.select).to.have.been.called;
  });

});