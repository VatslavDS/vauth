var keypair = require('keypair');


exports.NumericGenerator = function(length) {
    switch(length) {
      case 4:
        return Math.floor(1000 + Math.random() * 900000);
      case 6:
        return Math.floor(100000 + Math.random() * 900000);
      case 8:
        return Math.floor(10000000 + Math.random() * 900000);
    }
}


exports.AlphaNumericGenerator = function(length) {
    switch(length) {
      case 4:
        return GAN(length);
      case 6:
        return GAN(length);
      case 8:
        return GAN(length);
      case 12:
        return GAN(length);
    }
}

exports.GRT = function() {
  return rand() + rand(); // to make it longer
}


exports.GUUID = function() {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

function GAN(length) {
    if(length <= 12 && length >= 0) {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for( var i=0; i < length; i++ ) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
     return text;
   }
}

/*
**  Helper Functions
*/

var rand = function() {
    return Math.random().toString(36).substr(2); // remove `0.`
};


function s4() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
