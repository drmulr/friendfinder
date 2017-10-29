

//what data user sees and what data user able to post to server to store

var friendsData = require('../data/friends.js');


module.exports = function (app) {
  //get function...hey, whenever you go to this url api/tables, go ahead and dispay table data in json format...
  app.get('/api/friends', function (req, res) {
    res.json(friendsData);
  });

  // //building out same API endpoint for waiting list
  // app.get('/api/waitlist', function (req, res) {
  //   res.json(waitListData);
  // });



  // //res.json = boolean set up here so that we an trigger a diff message to user
  // app.post('/api/tables', function (req, res) {
  //   if (tableData.length < 5) {
  //     tableData.push(req.body);
  //     res.json(true);
  //   } else {
  //     waitListData.push(req.body);
  //     res.json(false);
  //   }
  // })


}
