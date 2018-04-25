var express = require('express');
var router = express.Router();
var mysql = require('mysql');
const connection = require('../controllers/config');

/* GET recruteur page */
router.get('/', function(req, res, next) {
  connection.query("SELECT * FROM bar WHERE type = 'serious'; SELECT * FROM collab", function(err, rows, fields) {
	  	if (err) {
	  		res.status(500).json({"status_code": 500,"status_message": "internal server error"});
	  	} else {
        let bar = rows[0];
        let collab = rows[1];
        res.render('recruteur', {bodyClass: 'recruteur', page: 'recruteur', bar, collab});
      }
    })});

module.exports = router;
