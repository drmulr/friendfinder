//to help direct user

var path = require('path');

module.exports = function (app) {
  //need way to get to diff pages
  //how send file using express and node
  //found - how to deliver files with express...google'd
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });
  app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });


//if already using app, and haven't already defined URL - go to homepage...any URL other than tables/reserve.
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });
}
