var os = require('os'),
  crypto = require('crypto');

module.exports = (function() {

  var parts = [os.hostname(), process.pid, +(new Date())],
    hash = crypto.createHash('md5').update(parts.join(''));

  return hash.digest('hex');

}());
