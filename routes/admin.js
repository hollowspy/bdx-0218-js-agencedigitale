var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var moment = require('moment');
const connection = require('../controllers/config');

let select = "SELECT * FROM bar; SELECT * FROM blog; SELECT * FROM collab; SELECT * FROM contact; SELECT * FROM missions; SELECT * FROM missions WHERE valide = 0";
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
        let valid = rows[5];

        res.render('admin', { bodyClass:'admin', bar, blog, collab, contact, missions, valid, moment});
	  	}
    });
}); // fin de l'appel au getElementsByClassName('className')

//                        //
// MISE A JOUR DES TABLES //
//                        //

// mise à jour table BAR
let update1 = 'UPDATE bar SET ? WHERE id = ?'
router.put('/bar/:id', function(req, res, next) {
  let input = JSON.stringify(req.body);
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

// mise à jour table BLOG
let update5 = 'UPDATE blog SET ? WHERE id = ?'
router.put('/blog/:id', function(req, res, next) {
  let input = JSON.stringify(req.body);
  let id = req.params.id;
  let data = {
    title: input.title,
    date_parution : input.date_parution,
    content: input.content,
    images: input.images,
    autor: input.autor,
    category: input.category,
    description: input.description
  }
  connection.query(update5,[data, id], function(err, result) {
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
  let input = JSON.stringify(req.body);
  let id = req.params.id;
  let data = {
    nom_poste: input.nom_poste,
    recruteur: input.recruteur,
    duree: input.duree,
    localisation: input.localisation,
    departement: input.departement,
    diplome: input.diplome,
    experience: input.experience,
    poste: input.poste,
    entreprise: input.entreprise,
    competences: input.competences,
    logo: input.logo,
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
  let input = JSON.stringify(req.body);
  let id = req.params.id;
  let data = {
    name: input.name,
    images: input.images,
    age: input.age,
    description: input.description,
    techno: input.techno,
    experience: input.experience,
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

//-----------------------//
// AJOUT DANS LES TABLES //
//-----------------------//

// ajout dans la table BAR
let insert = 'INSERT INTO bar SET ?'
router.post('/bar/add', function(req, res, next) {
  let data = {
    name: req.body.nameAdd,
    picto: req.body.pictoAdd,
    numbers : req.body.numbersAdd
  }
  connection.query(insert,[data], function(err, result) {
    if (err){
      res.status(500).json({"status_code": 500,"status_message": "internal server error"});
    } else {
      res.redirect('/admin');
    }
  })
})

// ajout dans la table MISSIONS
let insert2 = 'INSERT INTO missions SET ?'
router.post('/missions/add', function(req, res, next) {
  let data2 = {
    nom_poste: req.body.nom_posteAdd,
    recruteur: req.body.recruteurAdd,
    duree: req.body.dureeAdd,
    localisation: req.body.localisationAdd,
    departement: req.body.departementAdd,
    diplome: req.body.diplomeAdd,
    experience: req.body.experienceAdd,
    poste: req.body.posteAdd,
    entreprise: req.body.entrepriseAdd,
    competences: req.bodu.competencesAdd,
    logo: req.body.logoAdd
  }
  connection.query(insert2,[data2], function(err, result) {
    if (err){
      res.status(500).json({"status_code": 500,"status_message": "internal server error"});
    } else {
      res.redirect('/admin');
    }
  })
})

// ajout dans la table COLLAB
let insert3 = 'INSERT INTO collab SET ?'
router.post('/collab/add', function(req, res, next) {
  let data3 = {
    name: req.body.nameAdd,
    age: req.body.ageAdd,
    techno: req.body.technoAdd,
    experience: req.body.experienceAdd,
    description: req.body.descriptionAdd,
    images: req.body.imagesAdd
  }
  connection.query(insert3,[data3], function(err, result) {
    if (err){
      res.status(500).json({"status_code": 500,"status_message": "internal server error"});
    } else {
      res.redirect('/admin');
    }
  })
})

// AJOUT CONTACT
let insert4 = 'INSERT INTO collab SET ?'
router.post('/contact/add', function(req, res, next) {
  let data4 = {
    horaires: req.body.horairesAdd,
    adresse: req.body.adresseAdd,
    tel: req.body.telAdd,
    mail: req.body.mailAdd
  }
  connection.query(insert4,[data4], function(err, result) {
    if (err){
      res.status(500).json({"status_code": 500,"status_message": "internal server error"});
    } else {
      res.redirect('/admin');
    }
  })
})

//-----------------------------//
// SUPPRESSION DANS LES TABLES //
//-----------------------------//

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

router.put('/valider/:id', function(req, res, next) {
            if (req.body.action === 'add') {
              connection.query("UPDATE missions SET valide = 1 WHERE id = ?",[req.params.id],function(err, result)
              {
                  if (err)
                      throw err;
              else{
                res.redirect('/admin')
              }
            }
            )}});

router.delete('/delete/:id', function(req, res, next) {
  if (req.body.action === 'delete') {
    connection.query("DELETE FROM missions WHERE id = ?",[req.params.id],function(err, result)
    {
      if (err)
      throw err;
    else{
      res.redirect('/admin')
    }
  }
  )}});


module.exports = router;
