var express = require('express');
var app = express();
var ejs = require('ejs');
var pg = require('pg');
var bodyParser = require('body-parser');
var mysql = require('mysql');
app.use(bodyParser.urlencoded({ extended: true })); 

var mySqlClient = mysql.createConnection({
  host     : "localhost",
  user     : "root",
  password : "mdp",
  database : "projet_digital"
});

mySqlClient.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get('/',function(req,res,next){
res.sendfile('views/formulaire.pug');
});

app.post('/emploi', function(req, res) {

console.log('req.body');
console.log(req.body);
res.write('You sent the post "' + req.body.emploi+'".\n');
res.write('You sent the duree "' + req.body.duree+'".\n');
res.end()

mySqlClient.query("Insert into emploi (nom_poste,duree,localisation,diplome,experience,desc_poste,desc_entreprise,competences) VALUES ('"+req.body.emploi+"','"+req.body.duree+"','"+req.body.lieu+"','"+req.body.diplome+"','"+req.body.experience+"','"+req.body.descEmploi+"','"+req.body.descEnt+"','"+req.body.competences+"')",function(err, result)      
{                                                      
  if (err)
     throw err;
     console.log("table created");
});
});
app.listen(3000);
console.log('Example app listening at port:3000');