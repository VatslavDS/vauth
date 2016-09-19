var jwt = require('jsonwebtoken');
var keypair = require('keypair');
var fs = require('fs');
var cert = fs.readFileSync('private.key');  // get private key



module.exports = function TokenTimeDynamic(time, algorithm) {
  var pair = keypair();
  var token = jwt.sign({ foo: 'bar'}, pair.private, {algorithm: algorithm, expiresin: time.toString()});
  return token;
};

module.exports = function ValidateToken(token, user) {
  var cert = fs.readFileSync('/tmp/user/' + user + '/private.key');  // get private key
  var decoded = jwt.verify(token, cert, function(err, decoded) {
    if(err) {
      /*
     err = {
       name: 'TokenExpiredError',
       message: 'jwt expired',
       expiredAt: 1408621000
     }
   */
      return err;
    } else {
      return decoded;
    }
  });
};

module.exports = function GetPairKeys() {
  var pair = keypair();
  return pair;
}
