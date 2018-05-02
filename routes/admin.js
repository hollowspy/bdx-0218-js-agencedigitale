var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var moment = require('moment');
const connection = require('../controllers/config');

let select = "SELECT * FROM bar; SELECT * FROM blog; SELECT * FROM collab; SELECT * FROM contact; SELECT * FROM missions; SELECT * FROM missions WHERE valide = 0; SELECT * FROM login";
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
        let login = rows[6];

        res.render('admin', { bodyClass:'admin', bar, blog, collab, contact, missions, valid, login ,moment});
	  	}
    });
}); // fin de l'appel au getElementsByClassName('className')

//                        //
// MISE A JOUR DES TABLES //
//                        //

// mise à jour table BAR
let update1 = 'UPDATE bar SET ? WHERE id = ?'
router.put('/bar/:id', function(req, res, next) {
  // let input = JSON.stringify(req.body);
  let id = req.params.id;
  let dataBar = {
    name: req.body.name,
    numbers : req.body.numbers
  }
  connection.query(update1,[dataBar, id], function(err, result) {
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
  // let input = JSON.stringify(req.body);
  let id = req.params.id;
  let dataBlog = {
    title: req.body.title,
    date_parution : req.body.date_parution,
    content: req.body.content,
    images: req.body.images,
    autor: req.body.autor,
    category: req.body.category,
    description: req.body.description
  }
  connection.query(update5,[dataBlog, id], function(err, result) {
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
  // let input = JSON.stringify(req.body);
  let id = req.params.id;
  let dataMis = {
    nom_poste: req.body.nom_poste,
    recruteur: req.body.recruteur,
    duree: req.body.duree,
    localisation: req.body.localisation,
    departement: req.body.departement,
    diplome: req.body.diplome,
    experience: req.body.experience,
    poste: req.body.poste,
    entreprise: req.body.entreprise,
    competences: req.body.competences,
    logo: req.body.logo,
  }
  connection.query(update2,[dataMis, id], function(err, result) {
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
  // let input = JSON.stringify(req.body);
  let id = req.params.id;
  let dataCo = {
    name: req.body.name,
    images: req.body.images,
    age: req.body.age,
    description: req.body.description,
    techno: req.body.techno,
    experience: req.body.experience,
  }
  connection.query(update3,[dataCo, id], function(err, result) {
    if (err){
      res.status(500).json({"status_code": 500,"status_message": "internal server error"});
    } else {
      res.redirect('/admin#contentCollab');
    }
  })
})

// mise à jour table CONTACT
let update4 = 'UPDATE contact SET ? WHERE id = ?'
router.put('/contact/:id', function(req, res, next) {
  // let input = JSON.stringify(req.body);
  let id = req.params.id;
  let dataCon = {
    horaires: req.body.horaires,
    adresse: req.body.adresse,
    tel: req.body.tel,
    mail: req.body.mail
  }
  connection.query(update4,[dataCon, id], function(err, result) {
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

// AJOUT BLOG
let insert5 = 'INSERT INTO blog SET ?'
router.post('/blog/add', function(req, res, next) {
  let data5 = {
    date_parution: req.body.dateAdd,
    title: req.body.titleAdd,
    content: req.body.contentAdd,
    images: req.body.imagesAdd,
    autor: req.body.autorAdd,
    category: req.body.categoryAdd
  }
  connection.query(insert5,[data5], function(err, result) {
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

// SUPPRESSION BAR
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

// SUPPRESSION BLOG
let del2 = 'DELETE FROM blog WHERE id = ?'
router.delete('/blog/:id', function(req, res, next) {
  let id = req.params.id;
  connection.query(del2,[id], function(err, result) {
    if (err){
      res.status(500).json({"status_code": 500,"status_message": "internal server error"});
    } else {
      res.redirect('/admin');
    }
  })
})

// SUPPRESSION MISSIONS
let del3 = 'DELETE FROM missions WHERE id = ?'
router.delete('/missions/:id', function(req, res, next) {
  let id = req.params.id;
  connection.query(del3,[id], function(err, result) {
    if (err){
      res.status(500).json({"status_code": 500,"status_message": "internal server error"});
    } else {
      res.redirect('/admin');
    }
  })
})

// SUPPRESSION COLLAB
let del4 = 'DELETE FROM collab WHERE id = ?'
router.delete('/collab/:id', function(req, res, next) {
  let id = req.params.id;
  connection.query(del4,[id], function(err, result) {
    if (err){
      res.status(500).json({"status_code": 500,"status_message": "internal server error"});
    } else {
      res.redirect('/admin');
    }
  })
})

// SUPPRESSION CONTACT
let del5 = 'DELETE FROM contact WHERE id = ?'
router.delete('/contact/:id', function(req, res, next) {
  let id = req.params.id;
  connection.query(del5,[id], function(err, result) {
    if (err){
      res.status(500).json({"status_code": 500,"status_message": "internal server error"});
    } else {
      res.redirect('/admin');
    }
  })
})

// INVALIDATION OFFRES EMPLOIS
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
