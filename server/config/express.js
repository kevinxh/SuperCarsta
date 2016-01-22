var express = require('express'),
  path = require('path'),
  morgan = require('morgan'),
  compress = require('compression'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  session = require('express-session'),
  passport = require('passport'),
  router = require('../server.routes');

module.exports = function() {

  var app = express();

  if (process.env.NODE_ENV === 'development') {
    //app.use(morgan('dev'));
  } else if (process.env.NODE_ENV === 'production') {
    app.use(compress());
  }
  app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: 'Ju$tCh3ck1ng'
  }));
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  require('./env/development.js')(app);
  app.use(express.static(path.join(__dirname, '../../assets')));
  
  app.use(passport.initialize());
  app.use(passport.session());

  app.use(bodyParser.json());
  app.use(methodOverride());

  app.use(router());
  
  app.set('views', path.join(__dirname, '../views'));
  app.set('view engine', 'ejs');
  
  return app;
};