var express = require('express');
var router = express.Router();
var connection = require('../controllers/config.js')
let sql = 'SELECT * FROM missions WHERE valide = 1 ORDER BY date DESC; SELECT * FROM contact';

/* GET recruteur page */

router.get('/', function(req, res, next) {

//    const listEmploi = [];
    // Do the query to get data.
    connection.query('SELECT * FROM missions WHERE valide = 1 ORDER BY date DESC', function(err, rows, fields) {
            if (err) {
                res.status(500).json({
                    "status_code": 500,
                    "status_message": "internal server error"
                });
            } else {

                    let emploi = rows;


                console.log('mes objets',emploi);
                // Render index.pug page using array
                res.render('page_emploi', {
                    emploi
                });
            }
        });

    // Close the MySQL connection
    connection.end();

});

 //GET recruteur page
router.get('/search', function(req, res, next) {
    let poste = req.query.poste;
    let dpt = req.query.Dpt
    let requeteSQL = '';
    console.log(poste, dpt);
    if (dpt)
    requeteSQL = (`SELECT * FROM missions WHERE departement = ${dpt} AND nom_poste LIKE '%${poste}%' ORDER BY date DESC`)
    else
    requeteSQL = (`SELECT * FROM missions WHERE nom_poste LIKE '%${poste}%' ORDER BY date DESC`)

    console.log(requeteSQL);

    connection.query(requeteSQL, function(err, rows, fields) {
            if (err) {
                res.status(500).json({
                    "status_code": 500,
                    "status_message": "internal server error"
                });
            } else {

                    let emploi = rows;

                console.log('mes objets',emploi);
                // Render index.pug page using array
                res.render('page_emploi', {
                    emploi
                });
            }
        });

        // Close the MySQL connection
        connection.end();
    });

    // Do the query to get data.

module.exports = router;

