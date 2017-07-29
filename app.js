/*jslint node:true */
var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
	http = require('http'),
	upload = require('express-fileupload'),
	cookieParser = require('cookie-parser'),
	passport = require('passport'),
	session = require('cookie-session'),

/*==Setting app route variable and middleware==*/
	authRoutes = require('./src/routes/auth')(),
	userRoutes = require('./src/routes/users');

/*==using EJS as default rendering Engine==*/
app.set('views', './src/views');
app.set('view engine', 'ejs');
/*==End of using EJS as default rendering Engine==*/

app.use('/Auth', authRoutes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(session({secret: 'googleftm', resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/users', userRoutes);
	/*==requiring the passport.js configuration==*/
		require('./src/config/socialAuth')(app);
	/*==End of requiring the passport.js configuration==*/
/*==End of setting the app route variable==*/

/*==Setting the app to recieve the assets folder as a static file==*/
app.use('/assets', express.static('assets'));
app.use(express.static('./assets'));
app.use(upload());
/*==End of Setting the app to recieve the assets folder as a static file==*/



/*==Routing the app==*/
app.get('/', function (req, res) {
	'use strict';
	res.render('failure');
});
/*==End of routing the app==*/




/*==Giving the app a port==*/
app.listen(process.env.port || 8000, function () {
	'use strict';
	console.log('s3rv3r @#$% on @: ' + process.env.port + ' || 8000');
});
/*==End of giving the app a port==*/