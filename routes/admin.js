var express = require('express');
var router = express.Router();
const connection = require('../controllers/config');

let sql = "SELECT * FROM bar; SELECT * FROM missions";
/* GET administration page */
router.get('/', function(req, res, next) {
  // let barList = [];
  connection.query(sql, function(err, rows, fields) {
	  	if (err) {
	  		res.status(500).json({"status_code": 500,"status_message": "internal server error"});
	  	} else {
        let bar = rows[0];
        let missions = rows[1];

        res.render('admin', { bodyClass:'admin', bar, missions});
	  	}


	  });
}); // fin de l'appel au get


module.exports = router;
