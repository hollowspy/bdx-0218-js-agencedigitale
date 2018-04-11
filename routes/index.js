var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/blog', function(req, res, next) {
  res.render('blog', { title: 'Blog WNY' });
});

/* GET recruteur page */
router.get('/recruteur', function(req, res, next) {
  res.render('recruteur', { title: 'Express' });
});

module.exports = router;
