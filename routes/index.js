var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/blog', function(req, res, next) {
  res.render('blog', { title: 'BLog WNY' });
});




module.exports = router;
