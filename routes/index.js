const express = require('express');
const router = express.Router();
const connection = require('../controllers/config');
const nodemailer = require("nodemailer");


let sql = 'SELECT * FROM bar WHERE type = "fun"; SELECT * FROM missions WHERE valide = 1 ORDER BY date DESC LIMIT 6; SELECT * FROM contact';
/* GET home page. */
router.get('/', function(req, res, next) {

    let barList = [];
    connection.query(sql, function(err, rows, fields) {
        if (err) {
            res.status(500).json({
                "status_code": 500,
                "status_message": "internal server error"
            });
        } else {
            // Loop check on each row
            let fun = rows[0];
            let emploi = rows[1];
            let contact = rows[2];

            res.render('index', {
                bodyClass: 'developpeur',
                page: 'developpeur',
                fun,
                emploi,
                contact
            });
        }
    });
});


//Route pour l'envoie des mails



var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    host: 'smtp-relay.gmail.com',
    auth: {
        user: "julien.nied@gmail.com",
        pass: "JargefoN1"
    }
});

// route Nodemailer
/*
router.get('/addEmploi', function(req, res, next) {

    connection.query(sql, function(err, rows, fields) {
        if (err) {
            res.status(500).json({
                "status_code": 500,
                "status_message": "internal server error"
            });
        } else {
            console.log('youpi');
            smtpTransport.sendMail({
                from: "julien.nied@gmail.com", // Expediteur
                to: "hollowspy@free.fr", // Destinataires
                subject: "Nouvelle offre d'emploi !", // Sujet
                text: "Nouvelle offre d'emploi !", // plaintext body
                html: "Bonjour. Une nouvelle offre d'emploi vient d'être postée. Merci d'aller sur l'administration pour la valider ou non", // html body
            })
            // Loop check on each row
            let fun = rows[0];
            let emploi = rows[1];
            let contact = rows[2];

            res.render('confirm_emploi', {
                bodyClass: 'developpeur',
                page: 'developpeur',
                fun,
                emploi,
                contact
            });
        }
    });
});
*/

// Route test page nodemailer
router.get('/addEmploi', function(req, res, next) {
    connection.query(sql, function(err, rows, fields) {
        if (err) {
            res.status(500).json({
                "status_code": 500,
                "status_message": "internal server error"
            });
        } else {

    let fun = rows[0];
    let emploi = rows[1];
    let contact = rows[2];

    res.render('confirm_emploi', {
        bodyClass: 'developpeur',
        page: 'developpeur',
        fun,
        emploi,
        contact
        });
    }
});
});







module.exports = router;
