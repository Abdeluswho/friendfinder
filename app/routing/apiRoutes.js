let friendsdata = require("../data/friends.js");




module.exports = function(app){

		// Get all friends
		app.get("/api/friends", function(req, res) {
		  res.json(friendsdata);
		});

		app.post("/api/friends", function(req, res) {
		  // req.body hosts is equal to the JSON post sent from the user
		  // This works because of our body-parser middleware

		  var newFriend = req.body;
		   var scores = req.body.scores;
		   var diff1;
		   var diff2 = 100;

		   for (var i = 0; i < friendsdata.length; i++) {
		   	   for (var j = 0; j < scores.length; j++) {
		   	     diff1 = Math.abs(friendsdata[i].scores[j] - scores[j])
		   	    } 

		   	    
		   	    if (diff1 < diff2) {
		   	    	diff2 = diff1;
		   	    	matchName = friendsdata[i].name;
               		matchImage = friendsdata[i].photo;
                	console.log(matchName);
		   	    } 
		   }


		   document.getElementById("match-name").text(matchName);
		   document.getElementById("match-img").attr("src", matchImage);
		   document.getElementById("results-modal").modal("toggle");
	
		 
         

          // Show the modal with the best match
        



		  console.log(newFriend);
		  // Using a RegEx Pattern to remove spaces from newCharacter
		  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
		 

		  console.log('before the push');

		  friendsdata.push(newFriend);

		  res.json(newFriend);
		});
}