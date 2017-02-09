var data = require("../data.json");

exports.addFriend = function(req, res) { 
	// Your code goes here
  var q_name = req.query.name;
  var q_desc = req.query.description;
  var jsonobj = {"name" : q_name, "description" : q_desc, "imageURL" : 'http://lorempixel.com/400/400/people'};
  data.friends.push(jsonobj);
  res.render('index',data)
 }
