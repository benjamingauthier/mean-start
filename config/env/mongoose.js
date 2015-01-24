/**
 * Created by benjamingauthier on 24/01/15.
 */
var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function() {
    var db = mongoose.connect(config.db);
    return db;
};