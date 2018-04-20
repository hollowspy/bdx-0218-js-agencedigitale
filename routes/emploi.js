var express = require('express');
var router = express.Router();
var connection = require('../controllers/config.js')

/* GET recruteur page */
router.get('/', function(req, res, next) {
    const listEmploi = [];


    // Do the query to get data.
    connection.query('SELECT * FROM missions WHERE valide = 1 ORDER BY date DESC', function(err, rows, fields) {
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
                        'id_emploi' : rows[i].id,
                        'name_poste': rows[i].nom_poste,
                        'duree': rows[i].duree,
                        'ville': rows[i].localisation,
                        'txt_poste': rows[i].poste,
                        'txt_entreprise' : rows[i].entreprise,
                        'txt_competences' : rows[i].competences,
                        'name_recruteur' : rows[i].recruteur,
                        'date' : rows[i].date
                    }
                    // Add object into array
                    listEmploi.push(emploi);
                }
                console.log(listEmploi);

                // Render index.pug page using array
                res.render('page_emploi', {
                    "listEmploi": listEmploi,
                });
            }
        });

        // Close the MySQL connection
        connection.end();

    });

module.exports = router;
