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
      //Most recent addition to api/friends:
      console.log(req.body);
      //Push most recent addition to api/friends:
      friendsData.push(req.body);


      var length = friendsData.length;
      var userData = friendsData[length - 1].scores;
      var memberData = friendsData[0];


//--------------------------------------------------------------
    var myScores = req.body.scores;
    var userScores = friendsData[0].scores[0];
    var diff = 0;
    var matchDiff = 100;
    var bestFriend 

for (var x = 0; x < friendsData.length - 1; x++) {
      var sumDiff = 0;

      for (var i = 0; i < 10; i++) {
          diff = Math.abs(myScores[i] - friendsData[x].scores[i]);
          sumDiff += diff;
          console.log(sumDiff);
          if ( sumDiff < matchDiff ){
            matchDiff = sumDiff;
            console.log("MatchDiff: " + matchDiff);
            bestFriend = x;
            console.log("BEST FRIEND: " + bestFriend);
          } 
      }

}
res.json(friendsData[bestFriend]);







      // for (var i = 0; i < 10; i++) {
      //   var diffsArray = [];
      //     var sumDiffs = 0;

      //     var diff = function (a, b) {
      //         console.log("Diff #" + i + ": " + Math.abs(a - b));
      //         sumDiffs += Math.abs(a - b);
      //         console.log(sumDiffs);            
              
      //     }

      //     diff(userData[0], friendsData[i].scores[0]);
      //     diff(userData[1], friendsData[i].scores[1]);
      //     diff(userData[2], friendsData[i].scores[2]);
      //     diff(userData[3], friendsData[i].scores[3]);
      //     diff(userData[4], friendsData[i].scores[4]);
      //     diff(userData[5], friendsData[i].scores[5]);
      //     diff(userData[6], friendsData[i].scores[6]);
      //     diff(userData[7], friendsData[i].scores[7]);
      //     diff(userData[8], friendsData[i].scores[8]);
      //     diff(userData[9], friendsData[i].scores[9]);
      // };

//--------------------------------------------------------------

      
  })

}
