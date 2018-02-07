
let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');





module.exports = function(app){

	app.get("/survey", function(req, res) {
	  res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

	// Get all characters
	app.get("/all", function(req, res) {
	  res.sendFile(path.join(__dirname, "../public/home.html"));
	});

}