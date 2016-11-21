/*
* Rules engine server
 */
 
import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as errorHandler from 'errorhandler';

var server = express();

/* adding our routes 
* including static routes
*/
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

import {TenantRoute} from './routes/tenant.milpark.route';
server.use('/api', TenantRoute);

server.use(express.static(__dirname + '/../public'));

/*
* post server configuration
*/
var env = process.env.NODE_ENV || 'development';
if (env === 'development') {
    server.use(errorHandler());
    var port = process.env.PORT || 8081;
} else {
	var port = process.env.PORT || 8080;
}

server.listen(port, function() {
    console.log("Express server listening on port %d in %s mode", port, server.settings.env);
});


export var Server = server;





