/**
 * Created by benjamingauthier on 24/01/15.
 */
module.exports = function(app) {
    var index = require('../controllers/index.server.controller');
    app.get('/', index.render);
};