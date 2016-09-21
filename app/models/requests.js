var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RequestSchema = new Schema({
    user: String,
    date: {type: Date, default: Date.now },
    endpoint: String,
    user_agent: String,
    method_http: String,
    payload : String
  });

module.exports = mongoose.model('Request', RequestSchema);
