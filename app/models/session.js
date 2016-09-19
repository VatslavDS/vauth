var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

var SessionSchema = new Schema({
    token: String,
    date: {type: Date, default: Date.now }
});

module.exports = mongoose.model('Session', SessionSchema);
