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
	/*==pulling  the controller for userRoute==*/
	var controller = require('./controllers/usersController');
	/*==End of pulling the controller==*/
	
	/*==Triggering the upload function for ==*/
	userRoute.use(upload());
	/*==Routing the sign up process==*/
	userRoute.route('/signup')
		.post(controller.signup);
	/*==End of Routing the sign up process==*/
	
	/*==routing to the Profile==*/
	userRoute.route('/profile')
		.all(function (req, res, next) {
			if (!req.user) {
				res.redirect('/');
			}
			next();
		})
		.get(controller.getProfile);
	/*==End of routing to the profile==*/
	
	/*==Routing the upload==*/
	userRoute.route('/upload')
		.all(function (req, res, next) {
			if (!req.user) {
				res.redirect('/');
			}
			next();
		})
		.post(urlencodedParser, controller.uploadForm);
	/*==End of routing the upload==*/
	
	return userRoute;
}());
