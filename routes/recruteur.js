var express = require('express');
var router = express.Router();
var mysql = require('mysql');
const connection = require('../controllers/config');
let sql = 'SELECT * FROM bar WHERE type = "serious"; SELECT * FROM collab ;SELECT * FROM contact';

/* GET recruteur page */
router.get('/', function(req, res, next) {

  	  connection.query(sql, function(err, rows, fields) {
	  	if (err) {
	  		res.status(500).json({"status_code": 500,"status_message": "internal server error"});
	  	} else {

		  		var bar = rows[0];
		  		let collab = rows[1];
		  		let contact = rows[2];

	  	res.render('recruteur', {bodyClass: 'recruteur',
		 						page : 'recruteur',
								contact,
								bar,
								collab});
	  	}
	  	// Render index.pug page using array
    });
});


module.exports = router;
