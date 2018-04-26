var express = require('express');
var router = express.Router();
const connection = require('../controllers/config');

let select = "SELECT * FROM bar; SELECT * FROM blog; SELECT * FROM collab; SELECT * FROM contact; SELECT * FROM missions";
/* GET administration page */
router.get('/', function(req, res, next) {

  connection.query(select, function(err, rows, fields) {
	  	if (err) {
	  		res.status(500).json({"status_code": 500,"status_message": "internal server error"});
	  	} else {
        let bar = rows[0];
        let blog = rows[1];
        let collab = rows[2];
        let contact = rows[3];
        let missions = rows[4];

        res.render('admin', { bodyClass:'admin', bar, blog, collab, contact, missions});
	  	}
    });
}); // fin de l'appel au getElementsByClassName('className')

// mise à jour table BAR
let update1 = 'UPDATE bar SET ? WHERE id = ?'
router.put('/bar/:id', function(req, res, next) {
  let input = JSON.parse(JSON.stringify(req.body));
  let id = req.params.id;
  let data = {
    name: input.name,
    numbers : input.numbers
  }
  connection.query(update1,[data, id], function(err, result) {
    if (err){
      res.status(500).json({"status_code": 500,"status_message": "internal server error"});
    } else {

      res.redirect('/admin');
    }
  })
})

// mise à jour table MISSIONS
let update2 = 'UPDATE missions SET ? WHERE id = ?'
router.put('/missions/:id', function(req, res, next) {
  let input = JSON.parse(JSON.stringify(req.body));
  let id = req.params.id;
  let data = {
    nom_poste: input.nom_poste,
    recruteur: input.recruteur,
    duree: input.duree,
    localisation: input.localisation,
    diplome: input.diplome,
    experience: input.experience
  }
  connection.query(update2,[data, id], function(err, result) {
    if (err){
      res.status(500).json({"status_code": 500,"status_message": "internal server error"});
    } else {

      res.redirect('/admin');
    }
  })
})

// mise à jour table COLLAB
let update3 = 'UPDATE collab SET ? WHERE id = ?'
router.put('/collab/:id', function(req, res, next) {
  let input = JSON.parse(JSON.stringify(req.body));
  let id = req.params.id;
  let data = {
    name: input.name,
    age: input.age,
    techno: input.techno,
    experience: input.experience,
    image: input.image
  }
  connection.query(update3,[data, id], function(err, result) {
    if (err){
      res.status(500).json({"status_code": 500,"status_message": "internal server error"});
    } else {

      res.redirect('/admin');
    }
  })
})

// mise à jour table CONTACT
let update4 = 'UPDATE contact SET ? WHERE id = ?'
router.put('/contact/:id', function(req, res, next) {
  let input = JSON.stringify(req.body);
  let id = req.params.id;
  let data = {
    horaires: input.horaires,
    adresse: input.adresse,
    tel: input.tel,
    mail: input.mail
  }
  connection.query(update4,[data, id], function(err, result) {
    if (err){
      res.status(500).json({"status_code": 500,"status_message": "internal server error"});
    } else {

      res.redirect('/admin');
    }
  })
})

// ajout à la table BAR
let insert = 'INSERT INTO bar SET ?'
router.post('/bar/add', function(req, res, next) {
  let input = JSON.stringify(req.body);
  let data = {
    name: input.nameAdd,
    picto: input.pictoAdd,
    numbers : input.numbersAdd
  }
  console.log(data);
  connection.query(insert,[data], function(err, result) {
    if (err){
      res.status(500).json({"status_code": 500,"status_message": "internal server error"});
    } else {
      res.redirect('/admin');
    }
  })
})

// suppression à la table BAR
let del = 'DELETE FROM bar WHERE id = ?'
router.delete('/bar/:id', function(req, res, next) {
  let id = req.params.id;
  connection.query(del,[id], function(err, result) {
    if (err){
      res.status(500).json({"status_code": 500,"status_message": "internal server error"});
    } else {

      res.redirect('/admin');
    }
  })
})

module.exports = router;
