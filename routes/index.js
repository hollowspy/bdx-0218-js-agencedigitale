var express = require('express');
var router = express.Router();
const connection = require('../controllers/config');

const querySQL = 'SELECT * FROM bar WHERE type = ? ; SELECT * FROM collab';


/* GET home page. */
router.get('/', function (req, res, next) {

	let barList = [];
	connection.query(querySQL, ['fun'], function (err, rows, fields) {
		if (err) {
			res.status(500).json({ "status_code": 500, "status_message": "internal server error" });
		} else {
			// Loop check on each row
			console.log(rows);
			var fun = rows[0];
			var collab = rows[1];
			// Render index.pug page using array
			res.render('index', { 'barList': fun, bodyClass: 'developpeur', page: 'developpeur' });
		}

	});
});


module.exports = router;
