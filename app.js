/*jslint node:true */
var express = require('express'),
    app = express();


/*==Setting the app to recieve the assets folder as a static file==*/
app.use('/assets', express.static('assets'));
app.use(express.static('./assets'));
/*==End of Setting the app to recieve the assets folder as a static file==*/

/*==using EJS as default rendering Engine==*/
app.set('views', './views')
app.set('view engine', 'ejs');
/*==End of using EJS as default rendering Engine==*/

/*==Routing the app==*/
app.get('/', function (req, res) {
	'use strict';
	res.render('index');
});
/*==End of routing the app==*/

/*==Giving the app a port==*/
app.listen(process.env.port || 9000, function () {
	'use strict';
	console.log('s3rv3r @#$% on @: ' + process.env.port + ' || 9000');
});
/*==End of giving the app a port==*/