process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./server/config/express'),
	mongoose = require('./server/config/mongoose'),
	passport = require('./server/config/passport');

var db = mongoose();
var app = express();
var passport = passport();

var port = 80;

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
});


//https://api.instagram.com/oauth/authorize/?client_id=90ba6e4257404b0e87e28d9297d6ad93&redirect_uri=http://www.supercarsta.com/callback&response_type=code