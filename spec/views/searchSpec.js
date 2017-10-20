describe ('SearchView', function() {
  var view, collection;

  beforeEach(function() {
    collection = new Videos(fakeVideoData);
    sinon.spy(collection, 'search');

    view = new SearchView({ collection: collection });
    view.template = _.template('<input type="text"/><button></button>');
    view.render();  // re-render with test template
  });

  xdescribe('when rendering live data from YouTube', function() {

    it('should initiate a search with input box value when button is clicked', function() {
      view.$('input').val('something');
      view.$('button').click();
      expect(collection.search).to.have.been.called;
    });

    it('should initiate a search with input box value when enter is pressed', function() {
      view.$('input').val('something');
      view.$('input').trigger(jQuery.Event('keyup', { keyCode: 13 }));
      expect(collection.search).to.have.been.called;
    });

  });

});
