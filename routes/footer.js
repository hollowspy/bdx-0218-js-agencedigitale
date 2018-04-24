// var express = require('express');
// var router = express.Router();
// const connection = require('../controllers/config.js');

// /* GET home page. */
// router.get('/', function(req, res, next) {


//     connection.query('SELECT * FROM contact', function(err, rows, fields) {
//         if (err) {
//             res.status(500).json({
//                 "status_code": 500,
//                 "status_message": "internal server error"
//             });
//         } else {
//             let valide = rows;
//             // let adresse = valide.adresse;
//             // let mail = valide.mail;
//             // let tel = valide.tel;

//             res.render('footer_collab',{valide});

//             console.log(valide.length);
//             // console.log(valide.adresse);
          
//         } // end else
//     }); // end connection.query
//     connection.end();
// }); // end router.get



// module.exports = router;