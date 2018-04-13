var express = require('express');
var router = express.Router();

/* GET recruteur page */
router.get('/', function(req, res, next) {
  res.render('recruteur', { title: 'Page recruteur', bodyClass: 'recruteur' });
});


module.exports = router;
