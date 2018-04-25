var express = require('express');
var moment = require('moment');
var router = express.Router();

const connection = require('../controllers/config');
const querySQL = 'SELECT * FROM blog ORDER BY date_parution DESC LIMIT 3';
const queryGetBlogId = 'SELECT * FROM blog WHERE id=?';

/* GET blog page. */
router.get('/', (req, res, next) => {

  connection.query(querySQL, function (err, rows, fields) {
    if (err) {
			res.status(500).json({ "status_code": 500, "status_message": "internal server error" });
		} else {
			// Loop check on each row
			console.log(rows);
    res.render('blog', { 'blogs': rows, title: 'Blog WNY', moment });
    }
  });
});


router.get('/:id', (req, res, next) => {

  connection.query(queryGetBlogId, req.params.id, function (err, blogs, fields) {
    if (err) {
			res.status(500).json({ "status_code": 500, "status_message": "internal server error" });
		} else {
			// Loop check on each row
			console.log(blogs.length);
    res.render('full_article', { article : blogs[0], moment });
    }
  });
});

module.exports = router;