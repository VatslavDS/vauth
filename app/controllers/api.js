var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  path = require('path'),
  fs = require('fs'),
  crypto = require('crypto'),
  passport = require('passport'),
  mom = require('moment'),
  _ = require('lodash'),
  api = require('../../tools/endpoints.json')
  q = require('q');


module.exports = function(app, passport) {
  _.forEach(api, function(endpoint) {
    app[endpoint['method']](endpoint['endpoint'], function(req, res) {
      res.json({"api": endpoint});
    });
  });
};
