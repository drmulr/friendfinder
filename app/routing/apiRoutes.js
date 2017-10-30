//what data user sees and what data user able to post to server to store

var friendsData = require('../data/friends.js');

module.exports = function (app) {
  //get function...hey, whenever you go to this url api/tables, go ahead and dispay table data in json format...
  app.get('/api/friends', function (req, res) {
    res.json(friendsData);
  });




  //done later = once we start setting up the post features:
  //res.json = boolean set up here so that we an trigger a diff message to user
  app.post('/api/friends', function (req, res) {
      friendsData.push(req.body);
  })

}
