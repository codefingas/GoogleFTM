/*jslint node: true*/
var express = require('express'),
	authroute = express.Router();


var controller = function () {
	
	getProfile = function (req, res) {
		res.render('profile');
	};
	
	return {
		getProfile: getProfile
	}
	
};

module.exports = controller;