var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

var UserIPNSchema = new Schema({
    username: String,
    password: String,
    token: String
});

module.exports = mongoose.model('UserIPN', UserIPNSchema);
