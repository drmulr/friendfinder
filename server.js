// 1. Your survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

// 4. Your `apiRoutes.js` file should contain two routes:
//
//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
//
// 5. You should save your application's data inside of `app/data/friends.js` as an array of objects. Each of these objects should roughly follow the format below.


var bodyParser = require('body-parser');
var path = require('path');
var express = require('express');
var app = express();

var PORT = process.env.PORT || 8080;

//Grabbed from NPM Express start....
//------------------------------------------------------------
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// //saying, hey can you include html routes in this server file...and we want use express
// require('./app/routing/apiRoutes.js')(app);
// //require API routes first....that's where we get the data to put into HTML
// require('./app/routing/htmlRoutes.js')(app);


app.get('/', function (req, res) {
  res.send('Hello World!')
})


app.listen(PORT, function () {
  console.log('Example app listening on port: ' + PORT);
})
