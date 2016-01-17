var express = require('express');
var request = require('request');

module.exports = function() {
  var router = express.Router();

  router.get('/callback',function(req, res){
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
  });
  return router;
};