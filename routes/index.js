var express = require('express');
var router = express.Router();
const connection = require('../controllers/config');
let sql = 'SELECT * FROM bar WHERE type = "fun"; SELECT * FROM contact';
/* GET home page. */
router.get('/', function(req, res, next) {

  connection.query(sql, function(err, rows, fields) {
	  	if (err) {
	  		res.status(500).json({"status_code": 500,"status_message": "internal server error"});
	  	} else {
	  		// Loop check on each row
        let fun = rows[0];
        let contact = rows[1]

        // Render index.pug page using array
  	  	res.render('index', {bodyClass: 'developpeur', page: 'developpeur', fun, contact});
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
