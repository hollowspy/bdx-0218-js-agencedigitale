var express = require('express');
var router = express.Router();

/* GET recruteur page */
router.get('/', function(req, res, next) {
  res.render('page_emploi', { title: 'Page Emploi' });
});


module.exports = router;
