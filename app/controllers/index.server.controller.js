/**
 * Created by benjamingauthier on 24/01/15.
 */
exports.render = function(req, res) {
    res.render('index', {
        title: 'Howdy World'
    })
};