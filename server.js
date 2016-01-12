var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var express = require('express')

var app = express()
var port = 80

app.get('/callback',function(req, res){
	res.type('text/plain')
	res.send(req.query.code)
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