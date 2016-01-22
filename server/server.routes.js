var express = require('express');
var request = require('request');
var passport = require('passport');
var cars = require('./models/cars')

module.exports = function() {
  var router = express.Router();
  var index = require('./controllers/indexController');

  router.get('/',function(req,res){
    if(!req.user){
      res.render('index', {
        page: 'Home',
        cars: cars,
        user: req.user
      });
    }else{
      res.render('index', {
        page: 'Home',
        cars: cars,
        user: req.user
      });
    };
  });

  router.get('/oauth/instagram', passport.authenticate('instagram'));

  router.get('/callback', 
  passport.authenticate('instagram', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/');
  });

  router.get('/oauth/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });
  return router;
};