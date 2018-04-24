var express = require('express');
var router = express.Router();
const connection = require('../controllers/config');
let sql = 'SELECT * FROM bar; SELECT * FROM contact';

/* GET recruteur page */
router.get('/', function(req, res, next) {
  // let barList = [];
  // connection.query('SELECT * FROM bar WHERE type = ?', ['serious'], function(err, rows, fields) {
  	  connection.query(sql, function(err, rows, fields) {
	  	if (err) {
	  		res.status(500).json({"status_code": 500,"status_message": "internal server error"});
	  	} else {
	  		// Loop check on each row
	  		// for (var i = 0; i < rows.length; i++) {
	  			// Create an object to save current row's data
		  		var bar = rows[0];
		  		let contact = rows[1];
		 
	  	res.render('recruteur', {bodyClass: 'recruteur', contact, bar});
	  	}

	  	// Render index.pug page using array
	  	
    });
});


module.exports = router;
