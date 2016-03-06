var express = require('express');
var request = require('request');
var passport = require('passport');
var request = require('request');
var cars = require('./models/cars');

module.exports = function() {
  var router = express.Router();
  var index = require('./controllers/indexController');

  router.get('/',function(req,res){
    if(!req.user){
      res.render('auth/index', {
        page: 'Home',
        cars: cars,
        user: req.user
      });
    }else{
      res.render('app/index');
    };
  });

  //testing routing
  router.get('/Acura',function(req,res){
    if(!req.user){
      res.render('auth/index', {
        page: 'Home',
        cars: cars,
        user: req.user
      });
    }else{
      res.render('app/index');
    };
  });

  router.get('/oauth/instagram', passport.authenticate('instagram' , { scope: ['public_content'] }));

  router.get('/callback', 
  passport.authenticate('instagram',{ scope: ['public_content'] }),
  function(req, res) {
    res.redirect('/');
  });

  router.get('/oauth/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

  router.get('/user', function(req, res){
    if(req.user){
      res.json({
        user_bio: req.user.user_bio,
        user_id: req.user.user_id,
        user_name: req.user.user_name,
        user_picture: req.user.user_picture,
        user_counts: req.user.user_counts
      });
    }else{
      res.json({error: "You are not logged in!"})
    };
  });

  router.get('/test', function(req, res){

    if(req.user){
    	request('https://api.instagram.com/v1/users/self/media/recent?count=10&access_token='+req.user.user_token, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				console.log(JSON.stringify(JSON.parse(body),null,2) );
				res.json(JSON.stringify(JSON.parse(body),null,2));
			}else{
				console.log(error);
				res.json({msg: "api error!"})
			}
		});
    	
    }else{
      res.json({error: "You are not logged in!"});
    };
  });

  return router;
};