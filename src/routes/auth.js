/*jslint node: true*/
var express = require('express'),
	authroute = express.Router();

var router = function () {
	var authContoller = require('./controllers/authController')();
	authroute.route('/profile')
		.get(authContoller.getProfile);
};

module.exports = router;