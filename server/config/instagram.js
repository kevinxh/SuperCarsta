var passport = require('passport'),
	InstagramStrategy = require('passport-instagram');


module.exports = function() {

	passport.serializeUser(function(user, done) {
	  done(null, user);
	});

	passport.deserializeUser(function(obj, done) {
	  done(null, obj);
	});

	passport.use(new InstagramStrategy({
		clientID : '90ba6e4257404b0e87e28d9297d6ad93',
		clientSecret : '236275c7dce24640b986e4f7ed8f0fe5',
		callbackURL : 'http://www.supercarsta.com/callback'
	},
	function(accessToken, refreshToken, profile, done) {
		console.log(accessToken,'!!!!!!!!!!!!!!!!!\n');
		var userInfo = {
			user_token: accessToken,
			user_name:profile.username,
			user_picture:profile._json.data.profile_picture,
			user_id:profile._json.data.id,
			user_bio:profile._json.data.bio,
			user_counts:profile._json.data.counts
		};
		return done(null, userInfo);
	}));
};