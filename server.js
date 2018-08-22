// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Express Set-up
var app = express();
var PORT = process.env.PORT || 3000;

// Require the other .js files that will be used
require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);
// require("./app/data/friends.js")(app);

// Set-up Express to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Allow the assets folder to be used for static content
app.use("/app/assets", express.static("assets"));



// Starts the server to begin listening
app.listen(PORT, function(){
    console.log("Listneing")
});




