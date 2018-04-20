var express = require('express');
var router = express.Router();
const connection = require('../controllers/config.js');

/* GET home page. */
router.get('/', function(req, res, next) {

    var contactList = [];
    connection.query('SELECT * FROM contact', function(err, rows, fields) {
        if (err) {
            console.log("errorrr");
            res.status(500).json({
                "status_code": 500,
                "status_message": "internal server error"
            });
        } else {

            // for (var i = 0; i < rows.length; i++) {
            console.log("ok je suis dans le else")

            var fullForm = {
                'horraires': rows.horraires,
                'adresse': rows.adresse,
                'tel': rows.tel,
                'mail': rows.mail
            }
            console.log(fullForm)
            contactList.push(fullForm);

            // }
            console.log(contactList);
            res.render('footer_collab', {
                'contactList': contactList
            });
        } // end else
    }); // end connection.query

    connection.end();
}); // end router.get



module.exports = router;