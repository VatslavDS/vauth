var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  multer = require('multer'),
  crypto = require('crypto'),
  User = mongoose.model('UserIPN'),
  Session = mongoose.model('Session'),
  Request = mongoose.model('Request'),
  Generator = require('../../tools/Generator.js'),
  message = require('../../tools/message.json'),
  mom = require('moment'),
  q = require('q');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/api/v1/actions/by-user/:user', function(req, res, next) {

}):

router.get('/api/v1/actions/by-date/:date', function(req, res, next) {

});

router.get('/api/v1/actions/by-action/:action', function(req, res, next) {

});
