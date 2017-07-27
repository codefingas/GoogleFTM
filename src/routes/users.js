/*jslint node: true*/
var express = require('express'),
	userRoute = express.Router(),
	bodyParser = require('body-parser'),
    urlencodedParser = bodyParser.urlencoded({ extended: false }),
    mongodb = require('mongodb').MongoClient,
    passport = require('passport'),
	nodemailer  = require('nodemailer'),
	http = require('http'),
	upload = require('express-fileupload'),
	fs = require('fs');

module.exports = (function () {
	'use strict';
	userRoute.use(upload());
	/*==pulling  the controller for userRoute==*/
	var controller = require('./controllers/usersController');
	/*==End of pulling the controller==*/
	
	/*==Routing the sign up process==*/
	userRoute.route('/signup')
		.post(controller.signup);
	/*==End of Routing the sign up process==*/
	
	/*==routing to the Profile==*/
	userRoute.route('/profile')
		.get(controller.getProfile);
	/*==End of routing to the profile==*/
	
	/*==Routing the upload==*/
	userRoute.route('/upload')
		.post(urlencodedParser, controller.uploadForm);
	/*==End of routing the upload==*/
	
	return userRoute;
}());
