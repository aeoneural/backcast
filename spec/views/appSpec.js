describe('AppView', function() {
  var view;

  beforeEach(function() {
    sinon.spy(VideoPlayerView.prototype, 'render');
    sinon.spy(VideoListView.prototype, 'render');
    sinon.spy(SearchView.prototype, 'render');
    sinon.spy(AppView.prototype, 'render');
    sinon.spy(Backbone, 'ajax');

    view = new AppView();
    view.videos.reset(fakeVideoData);
  });

  afterEach(function() {
    VideoPlayerView.prototype.render.restore();
    VideoListView.prototype.render.restore();
    SearchView.prototype.render.restore();
    AppView.prototype.render.restore();
    Backbone.ajax.restore();
  });

  it('should render itself', function() {
    expect(AppView.prototype.render).to.have.callCount(1);
  });

  it('should render a VideoPlayer view', function() {
    expect(VideoPlayerView.prototype.render).to.have.callCount(1);
  });

  it('should render a VideoList view', function() {
    expect(VideoListView.prototype.render).to.have.callCount(1);
  });

  xdescribe('when rendering live data from YouTube', function() {

    it('should render a Search view', function() {
      expect(SearchView.prototype.render).to.have.callCount(1);
    });

    it('should call fetch videos when app is initialized', function() {
      expect(Backbone.ajax).to.have.been.called;
    });

    it('should select the first video once new videos are loaded', function() {
      var model = view.videos.at(0);
      sinon.spy(model, 'select');
      view.videos.trigger('sync');
      expect(model.select).to.have.been.called;
    });

  });
});
