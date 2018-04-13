var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET blog page. */
router.get('/blog', function(req, res, next) {
  res.render('blog', { title: 'Blog WNY' });
});

module.exports = router;
