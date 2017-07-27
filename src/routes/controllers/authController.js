/*jslint node: true*/
var express = require('express'),
	authroute = express.Router(),
    mongodb = require('mongodb').MongoClient,
    passport = require('passport');

/*==NOTE: watch the req.body object you might have to change it to the objects returned from google oauth==*/
var controller = function () {
	'use strict';
	var getProfile, signIn, failure;
	
	
	/*==routing the failure page==*/
	failure = function (req, res) {
		res.render('failure');
	};
	/*==End of routing the failure page==*/
	
	
	return {
		signIn: signIn,
		failure: failure
	};
	
};

module.exports = controller;