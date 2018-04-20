var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
multipleStatements: true,
host : 'sql7.freesqldatabase.com',
user : 'sql7233310',
password : 'uWdk11MDxj',
database : 'sql7233310'
});

/* GET recruteur page */
router.get('/', function(req, res, next) {
  connection.query("SELECT * FROM missions WHERE valide = 1", function(err, rows, fields) {
	  	if (err) {
	  		res.status(500).json({"status_code": 500,"status_message": "internal server error"});
	  	} else {
        let validation = rows[0];
        res.render('validation', {bodyClass: 'validation,', page: 'validation,', validation});
      }
    })});

module.exports = router;
