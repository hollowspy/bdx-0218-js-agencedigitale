var express = require('express');
var router = express.Router();
var ejs = require('ejs');
var pg = require('pg');
var bodyParser = require('body-parser');
var mysql = require('mysql');
const connection = require('../controllers/config');

router.use(bodyParser.urlencoded({ extended: true }));

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

router.post('/addEmploi', function(req, res) {
  console.log('ok')
	connection.query("INSERT INTO missions SET ?", req.body, function(err, result) {
        if (err)
            throw err;
        res.redirect('/recruteur')
    });
});


module.exports = router;
