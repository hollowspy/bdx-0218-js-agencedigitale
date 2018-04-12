var express = require('express');
var router = express.Router();

/* GET recruteur page */
router.get('/', function(req, res, next) {
  res.render('recruteur', { bodyClass:'recruteur', title: 'Page recruteur' });
});


module.exports = router;
