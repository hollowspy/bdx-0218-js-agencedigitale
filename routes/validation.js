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
  connection.query("SELECT * FROM missions WHERE valide = 0", function(err, rows, fields) {
	  	if (err) {
	  		res.status(500).json({"status_code": 500,"status_message": "internal server error"});
	  	} else {
        let valid= rows[0];
        let date_format = new Date(valid.date)
        let date_final = date_format.toISOString().slice(0,10);
        res.render('validation', {bodyClass: 'validation,', page: 'validation,', valid, date_final});
      }
    })});



module.exports = router;
