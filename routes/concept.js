var express = require('express');
var router = express.Router();
const connection = require('../controllers/config');

/* GET administration page */
router.get('/', function(req, res, next) {
res.render('concept3');
  // let conceptList = [];
  // connection.query('SELECT * FROM bar', function(err, rows, fields) {
	 //  	if (err) {
	 //  		res.status(500).json({"status_code": 500,"status_message": "internal server error"});
	 //  	} else {
	 //  		// Loop check on each row
	 //  		for (var i = 0; i < rows.length; i++) {

	 //  			// Create an object to save current row's data
		//   		var bar = {
		//   			'name':rows[i].name,
		//   			'numbers':rows[i].numbers,
		//   			'picto':rows[i].picto
		//   		}
		//   		// Add object into array
		//   		conceptList.push(bar);
	 //  	}

	 //  	// Render index.pug page using array
  //     res.render('concept2');
	 //  	}
  //   });
});

module.exports = router;