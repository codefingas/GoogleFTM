/*jslint node: true*/
var express = require('express'),
	userRoute = express.Router(),
	bodyParser = require('body-parser'),
	urlencodedParser = bodyParser.urlencoded({ extended: false }),
    mongodb = require('mongodb').MongoClient,
    passport = require('passport'),
	nodemailer  = require('nodemailer'),
	multer = require('multer'),
	path = require('path'),
	fs = require('fs');

    
module.exports = (function () {
	'use strict';
	var uploadForm, getProfile, signup;
	
	/*==Routing the profile page==*/
	getProfile = function (req, res) {
//		res.json(req.user);
		res.render('profile', {
			title: 'Profile Page',
			user: req.user
		});
	};
	/*==End of routing the profile page==*/
	
	/*==Testing the sign up function in users==*/
	signup = function (req, res) {
		console.log('request from signup:-' + req.body);
		var url = 'mongodb://localhost:27017/googleftm';
		mongodb.connect(url, function (err, db) {
			var collection = db.collection('users'),
				user = {
					email: req.body.email,
					username: req.body.username,
					password: req.body.password
				};
			collection.insert(user,
				 function (err, results) {
					req.login(results.ops[0], function () {
						res.redirect('/users/profile');
					});
				});
		});
	};
	/*==End of Testing the sign up function==*/
	
	/*==The multipart form controller==*/
	uploadForm = function (req, res) {
		res.send('Email Sent');
		console.log(req.body);
		var file = req.files,
			data = req.body,
			transporter,
			mailOptions;
		transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: data.userEmail,
				pass: data.userPassword
			}
		});
		mailOptions = {
			from: data.userEmail,
			to: data.reciever,
			subject: 'GoogleFTM: ' + data.description,
			message: 'Hi i sent you this file using GoogleFTM --by Ezekiel Saturday join today @https://github.com/attaab/GoogleFTM/',
			attachments: [
				{
					filename: data.filename,
					content: new Buffer(file.file.data, file.file.encoding)
				}
			]
		};
		transporter.sendMail(mailOptions, function (error, info) {
			if (error) {
				console.log(error);
			} else {
				console.log('Email sent! ' + info.response);
			}
		});
	};
	/*==End of the multipart form controller==*/
	
	return {
		uploadForm: uploadForm,
		getProfile: getProfile,
		signup: signup
	};
}());