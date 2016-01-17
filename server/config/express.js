var express = require('express'),
  path = require('path'),
  morgan = require('morgan'),
  compress = require('compression'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  router = require('../server.routes');

module.exports = function() {

  var app = express();
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  } else if (process.env.NODE_ENV === 'production') {
    app.use(compress());
  }

  app.use(bodyParser.urlencoded({
    extended: true
  }));
  require('./env/development.js')(app);
   app.use(express.static(path.join(__dirname, '../../assets')));
  
  app.use(router());
 
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.set('views', path.join(__dirname, '../views'));
  app.set('view engine', 'ejs');
  
  return app;
};