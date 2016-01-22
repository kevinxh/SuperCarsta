var express = require('express');
var request = require('request');
var passport = require('passport');

module.exports = function() {
  var router = express.Router();
  var index = require('./controllers/indexController');

  router.get('/',function(req,res){
    if(!req.user){
      res.render('index', {
        page: 'Home',
        user: req.user
      });
    }else{
      res.render('index', {
        page: 'Home',
        user: req.user
      });
    };
  });

  router.get('/oauth/instagram', passport.authenticate('instagram'));

  router.get('/callback', 
  passport.authenticate('instagram', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    console.log(JSON.stringify(req.user)+"~~~~~~~~~~~~~~~~~~user");
    //res.json(JSON.stringify(req.user));
    res.redirect('/');
  });

  /*router.get('/callback',function(req, res){
    console.log(req.session);

    var code = req.query.code;
    var callbackReq = {
      method: 'post',
      body:'client_id=90ba6e4257404b0e87e28d9297d6ad93&client_secret=236275c7dce24640b986e4f7ed8f0fe5&grant_type=authorization_code&redirect_uri=http://www.supercarsta.com/callback&code=' + code,
      url:'https://api.instagram.com/oauth/access_token'
    };

    request(callbackReq, function (err, result) {
        if (err) {
          console.log('Error :' ,err);
          return
        }
        res.type('json');
        res.send(result.body);
        return;
    });
  });*/
  return router;
};