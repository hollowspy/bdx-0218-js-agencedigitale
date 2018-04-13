var express = require('express');
var router = express.Router();
var connection = require('../controlBDD/bdd.js')

/* GET recruteur page */
router.get('/', function(req, res, next) {
    const listEmploi = [];


    // Do the query to get data.
    connection.query('SELECT * FROM missions', function(err, rows, fields) {
            if (err) {
                res.status(500).json({
                    "status_code": 500,
                    "status_message": "internal server error"
                });
            } else {
                // Loop check on each row
                console.log('requete SQL ok');
                for (var i = 0; i < rows.length; i++) {

                    // Create an object to save current row's data
                    var emploi = {
                        'name_poste': rows[i].nom_poste,
                        'duree': rows[i].duree,
                        'ville': rows[i].localisation,
                        'descri_poste': rows[i].desc_poste
                    }
                    // Add object into array
                    listEmploi.push(emploi);
                }
                console.log(listEmploi);

                // Render index.pug page using array
                res.render('page_emploi', {
                    "listEmploi": listEmploi
                });
            }
        });

        // Close the MySQL connection
        connection.end();

    });

module.exports = router;
