var expect = require('expect.js'),
    moko   = require('moko'),
    timestamps = require('../');

describe('Moko Timestamps', function() {
  var User;

  before(function() {
    User = moko('User').attr('_id');
    User.save = User.update = function*() { };
    User.use(timestamps());
  });

  it('sets createdAt on create', function*() {
    var user = yield new User();
    yield user.save();
    expect(user.createdAt).to.be.a(Date);
  });

  it('sets updatedAt on save', function*() {
    var user = yield new User({_id: 1 });
    yield user.save();
    expect(user.createdAt).to.be(undefined);
    expect(user.updatedAt).to.be.a(Date);
  });

  it('allows custom attrs', function*() {
    User.use(timestamps('bornAt', 'savedAt'));
    var user = yield new User();
    yield user.save();
    expect(user.bornAt).to.be.a(Date);
    expect(user.savedAt).to.be.a(Date);
  });
});
