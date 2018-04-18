var express = require('express');
var router = express.Router();
const connection = require('../controllers/config');

/* GET recruteur page */
router.get('/', function(req, res, next) {
  let barList = [];
  connection.query('SELECT * FROM bar WHERE type = ?', ['serious'], function(err, rows, fields) {
	  	if (err) {
	  		res.status(500).json({"status_code": 500,"status_message": "internal server error"});
	  	} else {
	  		// Loop check on each row
	  		for (let i = 0; i < rows.length; i++) {
	  			// Create an object to save current row's data
		  		let bar = {
		  			'name':rows[i].name,
		  			'numbers':rows[i].numbers,
		  			'picto':rows[i].picto
		  		}
		  		// Add object into array
		  		barList.push(bar);
	  	}

	  	// Render index.pug page using array
	  	res.render('recruteur', {'barList': barList, bodyClass: 'recruteur'});
	  	}
    });
});


module.exports = router;
