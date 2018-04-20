var express = require('express');
var router = express.Router();
const connection = require('../controllers/config');

/* GET home page. */
router.get('/', function(req, res, next) {

  let barList = [];
  connection.query('SELECT * FROM bar WHERE type = ?', ['fun'], function(err, rows, fields) {
	  	if (err) {
	  		res.status(500).json({"status_code": 500,"status_message": "internal server error"});
	  	} else {
	  		// Loop check on each row
	  		for (var i = 0; i < rows.length; i++) {

	  			// Create an object to save current row's data
		  		var bar = {
		  			'name':rows[i].name,
		  			'numbers':rows[i].numbers,
		  			'picto':rows[i].picto
		  		}
		  		// Add object into array
		  		barList.push(bar);
	  	}

	  	// Render index.pug page using array
	  	res.render('index', {'barList': barList, bodyClass: 'developpeur', page: 'developpeur'});
	  	}
    });
});

/* GET blog page. */
router.get('/blog', function(req, res, next) {
    res.render('blog', {
        title: 'Blog WNY'
    });
});

module.exports = router;