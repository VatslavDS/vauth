var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

var SessionSchema = new Schema({
    user: String,
    date: {type: Date, default: Date.now },
    user_agent: String
});

module.exports = mongoose.model('Session', SessionSchema);
