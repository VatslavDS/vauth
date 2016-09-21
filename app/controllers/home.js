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
  Request = mongoose.model('Request'),
  Generator = require('../../tools/Generator.js'),
  message = require('../../tools/message.json'),
  mom = require('moment'),
  q = require('q');
  /*
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport('smtps://poliappipn@gmail.com:ipn1234567890@smtp.gmail.com');
var mailOptions = {
  from: 'poliappipn@gmail.com', // sender address
    to: "some@some.com", // list of receivers
    subject: 'Alta de la aplicación!!', // Subject line
    text: "hola",
    html: '<b>Hello world </b><a href='+ "" + "Hola" + ""+'>Click aqui</a>' // html body
};


transporter.sendMail(mailOptions, function(error, info){
                  if(error){
                    return console.log("The error was: " + error);
                  }
                    console.log('Message sent: ' + info.response);
                });
                */

module.exports = function (app) {
  app.use('/', router);
};


router.get('/', function (req, res, next) {
  var request = new Request();
  request.endpoint = '/';
  request.user_agent = req.get('User-Agent');
  request.method_http = 'GET';
  request.payload = ""
  request.save().then(function(data) {
    return res.render('site');
  });
});

router.get('/api/v1/nip/:len', function (req, res, next) {
   var length = req.params.len;
   message['data']['otp'] = Generator['NumericGenerator'](parseInt(length))
   message['timestamp'] = mom().format('MMMM Do YYYY, h:mm:ss a');
   var r = new Request();
   r.endpoint = '/api/v1/nip/' + length;
   r.user_agent = req.get('User-Agent');
   r.method_http = 'GET';
   r.payload = JSON.stringify(message);

   r.save().then(function(data) {
     res.json(message);
   });
});

router.get('/api/v1/alpha-nip/:len', function (req, res, next) {
   var request = new Request();
   var length = req.params.len;
   request.endpoint = '/api/v1/alpha-nip/' + length;
   request.user_agent = req.get('User-Agent');
   request.method_http = 'GET';
   message['data']['otp'] = Generator['AlphaNumericGenerator'](parseInt(length))
   message['timestamp'] = mom().format('MMMM Do YYYY, h:mm:ss a');
   request.payload = JSON.stringify(message);

   request.save().then(function(data) {
     res.json(message);
   });
});

router.get('/api/v1/random-token', function (req, res, next) {
  var request = new Request();
  request.endpoint = '/api/v1/random-token';
  request.user_agent = req.get('User-Agent');
  request.method_http = 'GET';
   message['data']['otp'] = Generator['GRT']();
   message['timestamp'] = mom().format('MMMM Do YYYY, h:mm:ss a');
   request.payload = JSON.stringify(message);

   request.save().then(function(data) {
     res.json(message);
   });
 });

router.get('/api/v1/guuid', function (req, res, next) {
  var request = new Request();
  request.endpoint = '/api/v1/guuid';
  request.user_agent = req.get('User-Agent');
  request.method_http = 'GET';

   message['data']['otp'] = Generator['GUUID']()
   message['timestamp'] = mom().format('MMMM Do YYYY, h:mm:ss a');
   request.payload = JSON.stringify(message);

   request.save().then(function(data) {
     res.json(message);
   });
 });


router.get('/api/v1/encrypt/:data', function(req, res, next) {
  var request = new Request();
  var d = req.params.data;

  request.endpoint = '/api/v1/encrypt/' + d;
  request.user_agent = req.get('User-Agent');
  request.method_http = 'GET';

  message['data']['payload'] = Generator['ENCRYPT'](d);
  request.payload = JSON.stringify(message);

  request.save().then(function(data) {
    res.json(message);
  });
});

router.get('/api/v1/decrypt/:data', function(req, res, next) {
  var request = new Request();
  var d = req.params.data;

  request.endpoint = '/api/v1/decrypt/' + d;
  request.user_agent = req.get('User-Agent');
  request.method_http = 'GET';

  message['data']['payload'] = Generator['DECRYPT'](d);
  request.payload = JSON.stringify(message);

  request.save().then(function(data) {
    res.json(message);
  });
});

router.get('/api/v1/login/:user', function(req, res, next) {
  var request = new Request();
  var u = req.params.user;

  request.endpoint = '/api/v1/login/' + u;
  request.user_agent = req.get('User-Agent');
  request.method_http = 'GET';
  request.payload = u;

  User.findOne({'username' : u}, function(err, user) {
    if(err && user == null) {
      res.json({"error": err});
    }else if(user != null){
      user['token'] = Generator['AlphaNumericGenerator'](12);
      user.save().then(function(err) {
        var s = new Session();
        s.user = u;
        s.save().then(function(err) {
          request.save().then(function(data) {
            res.json({"message": "Login Successful"});
          });
        });
      });
    }
  });
});

router.get('/api/v1/logout/:user', function(req, res, next) {
  var u = req.params.user;
  var request = new Request();
  request.endpoint = '/api/v1/logout/' + u;
  request.user_agent = req.get('User-Agent');
  request.method_http = 'GET';
  request.payload = u;

  User.findOne({'username' : u}, function(err, user) {
    if(err && user == null) {
      res.json({"error": err});
    }else if(user != null){
      user['token'] = "";
      user.save().tehn(function(err) {
        request.save().then(function(data) {
          res.json({"message": "Login Successful"});
        });
      });
    }
  });

});

router.get('/api/v1/faker/:username/:password', function(req, res, next) {
  var request = new Request();
  request.endpoint = '/api/v1/faker/:username/:password';
  request.user_agent = req.get('User-Agent');
  request.method_http = 'GET';

  var u = new User();
  var user = req.params.username;
  var pass = req.params.password;
  request.payload = user + " " + pass;
  u.username = user;
  u.password = pass;
  u.save().then(function(user) {
    return res.json({"Usuario creado": user});
  });
});
