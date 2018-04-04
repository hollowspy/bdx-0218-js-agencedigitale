var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET recruteur page */
router.get('/recruteur', function(req, res, next) {
  res.render('recruteur', { title: 'Express' });
});


module.exports = router;
