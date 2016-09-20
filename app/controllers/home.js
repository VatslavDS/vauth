var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  multer = require('multer'),
  path = require('path'),
  fs = require('fs'),
  mime = require('mime'),
  crypto = require('crypto'),
  User = mongoose.model('UserIPN'),
  Session = mongoose.model('Session'),
  Generator = require('../../tools/Generator.js'),
  message = require('../../tools/message.json'),
  mom = require('moment'),
  q = require('q');


module.exports = function (app) {
  app.use('/', router);
};


router.get('/', function (req, res, next) {
  res.render('site')
});

router.get('/api/v1/nip/:len', function (req, res, next) {
   var length = req.params.len;
   message['data']['otp'] = Generator['NumericGenerator'](parseInt(length))
   message['timestamp'] = mom().format('MMMM Do YYYY, h:mm:ss a');
   res.json(message);
});

router.get('/api/v1/alpha-nip/:len', function (req, res, next) {
  console.log(req.params.len);
   var length = req.params.len;
   message['data']['otp'] = Generator['AlphaNumericGenerator'](parseInt(length))
   message['timestamp'] = mom().format('MMMM Do YYYY, h:mm:ss a');
   res.json(message);
});

router.get('/api/v1/random-token', function (req, res, next) {
   message['data']['otp'] = Generator['GRT']();
   message['timestamp'] = mom().format('MMMM Do YYYY, h:mm:ss a');
   res.json(message);
});

router.get('/api/v1/guuid', function (req, res, next) {
   message['data']['otp'] = Generator['GUUID']()
   message['timestamp'] = mom().format('MMMM Do YYYY, h:mm:ss a');
   res.json(message);
});


router.get('/api/v1/encrypt/:data', function(req, res, next) {
  var d = req.params.data;
  message['data']['payload'] = Generator['ENCRYPT'](d);
  res.json(message);
});

router.get('/api/v1/decrypt/:data', function(req, res, next) {
  var d = req.params.data;
  message['data']['payload'] = Generator['DECRYPT'](d);
  res.json(message);
});

router.get('/api/v1/login/:user', function(req, res, next) {
  var u = req.params.user;
  User.findOne({'username' : u}, function(err, user) {
    if(err && user == null) {
      res.json({"error": err});
    }else if(user != null){
      user['token'] = Generator['AlphaNumericGenerator'](12);
      user.save(function(err) {
        var s = new Session();
        s.user = u;
        s.save(function(err) {
          res.json({"message": "Login Exitoso"});
        });
      });
    }
  });
});

router.get('/api/v1/logout/:user', function(req, res, next) {
  var u = req.params.user;
  User.findOne({'username' : u}, function(err, user) {
    if(err && user == null) {
      res.json({"error": err});
    }else if(user != null){
      user['token'] = "";
      user.save(function(err) {
        res.json({"message": "Logout Exitoso"});
      });
    }
  });

});

router.get('/api/v1/faker/:username/:password', function(req, res, next) {
  var u = new User();
  var user = req.params.username;
  var pass = req.params.password;

  u.username = user;
  u.password = pass;
  u.save(function(err) {
    if(err) {
      res.json({"error": err});
    } else {
      res.json({"message": "ok"});
    }
  });
});
