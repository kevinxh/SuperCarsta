exports.render = function(req, res) {

  req.session.lastVisit = new Date();

  res.render('index', {
    page: 'Home'
  })
};