var mongoose = require('mongoose');

module.exports = function() {
	var URI = 'mongodb://kevin:1114@ds047325.mongolab.com:47325/supercarsta';
  	var db = mongoose.connect(URI);

  	return db;
};