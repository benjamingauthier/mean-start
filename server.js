/**
 * Created by benjamingauthier on 24/01/15.
 */
var port = 1337;
var express = require('./config/express');
var app = express();
app.listen(port);
module.exports = app;
console.log('Server running at http://localhost:' + port);