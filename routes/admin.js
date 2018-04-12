var express = require('express');
var router = express.Router();

/* GET administration page */
router.get('/', function(req, res, next) {
  res.render('admin', { bodyClass:'admin'});
});


module.exports = router;
