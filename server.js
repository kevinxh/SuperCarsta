var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var express = require('express')
var request = require('request')
var bodyParser = require('body-parser')

var app = express()
var port = 80

app.use(bodyParser.json())

app.get('/callback',function(req, res){

	var code = req.query.code

	var callbackReq = {
		method: 'post',
		body:'client_id=90ba6e4257404b0e87e28d9297d6ad93&client_secret=236275c7dce24640b986e4f7ed8f0fe5&grant_type=authorization_code&redirect_uri=http://www.supercarsta.com/callback&code=' + code,
		url:'https://api.instagram.com/oauth/access_token'
	}

	var data = request(callbackReq, function (err, res, body) {
  		if (err) {
    		console.log('Error :' ,err)
    		return
  		}     
  		console.log('RES :' ,res.body)
  		return res.body
	});

	console.log('DATA :' ,data)

	res.type('html')
	res.send(data)
})

app.use(express.static('./assets'))

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.use(function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})


//https://api.instagram.com/oauth/authorize/?client_id=90ba6e4257404b0e87e28d9297d6ad93&redirect_uri=http://www.supercarsta.com/callback&response_type=code