describe('VideoListView', function() {
  var view, collection;

  beforeEach(function() {
    sinon.spy(VideoListView.prototype, 'render');
    sinon.spy(VideoListEntryView.prototype, 'render');

    collection = new Videos(fakeVideoData);
    view = new VideoListView({ collection: collection });
  });

  afterEach(function() {
    VideoListView.prototype.render.restore();
    VideoListEntryView.prototype.render.restore();
  });

  it('should render five `VideoListEntry` when given five videos', function() {
    view.render(); // fake video data contains 5 entries
    expect(VideoListEntryView.prototype.render).to.have.callCount(5);
  });

  it('should re-render when video collection updates', function() {
    collection.trigger('sync');
    expect(view.render).to.have.been.called;
  });

});