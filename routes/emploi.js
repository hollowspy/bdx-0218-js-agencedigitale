var express = require('express');
var router = express.Router();
var connection = require('../controlBDD/bdd.js')

/* GET recruteur page */
router.get('/', function(req, res, next) {
    const listEmploi = [];
    connection.query('SELECT * from missions')

    res.render('page_emploi', { title: 'Page Emploi' });
});


module.exports = router;
