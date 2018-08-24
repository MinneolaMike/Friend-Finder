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

// Set-up Express to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Starts the server to begin listening
app.listen(PORT, function(){
    console.log("Listneing")
});




