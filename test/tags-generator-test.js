var uneeq = require('../lib/uneeq'),
  assert = require('assert');

describe('Using the uneeq module', function () {

  it('should generate unique identifier of 32 characters', function (done) {
    assert.deepEqual(uneeq.length, 32);
    done();
  });

  it('should generate a string', function (done) {
    assert.deepEqual(typeof(uneeq), "string");
    done();
  });

});
