var express = require('express');
var router = express.Router();
const connection = require('../controllers/config');
let sql = 'SELECT * FROM bar; SELECT * FROM contact';
/* GET home page. */
router.get('/', function(req, res, next) {

 let barList = [];
 connection.query(sql, function(err, rows, fields) {
          if (err) {
              res.status(500).json({"status_code": 500,"status_message": "internal server error"});
          } else {
              // Loop check on each row
       let fun = rows[0];
       let contact = rows[1]

           res.render('index', {bodyClass: 'developpeur', page: 'developpeur', fun, contact});
       console.log(fun.length);
       console.log(contact);
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