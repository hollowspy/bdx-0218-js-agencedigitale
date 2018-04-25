var express = require('express');
var moment = require('moment');
var router = express.Router();

const connection = require('../controllers/config');
const querySQL = 'SELECT * FROM blog ORDER BY date_parution DESC LIMIT 3';

/* GET blog page. */
router.get('/blog/:id(\\d+)', (req, res, next) => {

  connection.query(querySQL, function (err, rows, fields) {
    if (err) {
			res.status(500).json({ "status_code": 500, "status_message": "internal server error" });
		} else {
			// Loop check on each row
			console.log(rows);
			var blogJson = rows;
    res.render('articles', { 'blogs': blogJson, title: 'Blog WNY', moment });
    }
  });
});


module.exports = router;