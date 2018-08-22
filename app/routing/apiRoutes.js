// Require path dependency
var path = require("path");

// Variable that imports friendList from friends.js
var friendList = require("../data/friends.js")

module.exports = function (app) {
    // GET route that displays all possible friends in JSON via the hyperlink
    app.get('/api/friends', function (req, res) {
        res.json(friendList);
    });

    // Post route that will compare the user to the friends API
    app.post('/api/friends', function (req, res) {
        
        // Variables that will be used to match user to new friend
        var userScores = req.body.scores;
        var scoresArray = [];
        var bestMatch = 0;
        var scoresDifference = 0;

        // For loop that runs over the friendsList
        for (var i = 0; i < friendList.length; i++) {
            // For loop that runs over the user
            for (var j = 0; j < userScores.length; j++) {
                // Calculates the difference between the user and the friends in the friendList
                scoresDifference += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(userScores[j])));
            }
            // pushes the scoresDifference into the scoresArray
            scoresArray.push(scoresDifference);
        }
        
        // For loop that runs over the scoresArray which now houses the scoresDifference
        for (var i = 0; i < scoresArray.length; i++) {
            // if the scoresArray is less than or equal to the scores of a friend, bestMatch becomes the index of the new friend
            if (scoresArray[i] <= scoresArray[bestMatch]) {
                bestMatch = i;
            }
        }

        // Returns the newFriend
        var newFriend = friendList[bestMatch];
        res.json(newFriend);

        // Adds user to the friendList
        friendList.push(req.body);
    });
};