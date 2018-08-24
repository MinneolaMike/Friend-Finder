// Require path dependency
var path = require("path");

// Variable that imports friendList from friend
var friendList = require("../data/friends");

module.exports = function (app) {
    // GET route that gets the data in friends.js and brings it in JSON
    app.get("/api/friends", function (req, res) {
        res.json(friendList);
        console.log(friendList);
    })
    // POST route for comparing the user against their new best friend
    app.post("/api/friends", function (req, res) {
        //Variable to house the user input called newFriend and push it to the friends list
        var newFriend = req.body;
        friendList.push(newFriend);
        // Variable for the bestMatch
        var bestMatch = {
            diff: 999,
            friend: {}
        }
        // For loop to run over the friends list and seperate them
        for (var i = 0; i < friendList.length; i++) {
            var totalDifference = 0;
            // For link to furtur break it down into the scores
            for (var j = 0; j < friendList[i].scores.length; j++) {
                // Math that take the friend list scores and subtract theuser scores from it and then re-assigns it
                var difference = Math.abs(parseInt(friendList[i].scores[j]) - parseInt(req.body.scores[j]));
                totalDifference += difference;
            }
            // compares the user against the friends list and selects the best match friend based on the scores
            if (totalDifference < bestMatch.diff) {
                bestMatch.diff = totalDifference;
                bestMatch.friend = friendList[i];
            }
        }
        // 
        res.json(bestMatch);
        
    });
    
}
