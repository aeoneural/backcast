describe ('VideoModel', function() {
  var model;

  beforeEach(function() {
    model = new Video(fakeVideoData[0]);
    sinon.spy(model, 'trigger');
  });

  it('should override the youtube video id', function() {
    expect(model.attributes.id).to.be.a('string');
  });

  it('should have a select function', function() {
    expect(model.select).to.be.a('function');
  });

  it('should trigger a select event when select is called', function() {
    model.select();
    expect(model.trigger).to.have.been.calledWith('select');
  });

  it('should select event should include a refernce to the model', function() {
    model.select();
    expect(model.trigger).to.have.been.calledWith('select', model);
  });

});