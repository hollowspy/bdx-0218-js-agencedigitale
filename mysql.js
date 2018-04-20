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
    res.end()
    mySqlClient.query("Insert into missions(nom_poste,duree,localisation,diplome,experience,desc_poste,desc_entreprise,competences) VALUES ('"+req.body.emploi+"','"+req.body.duree+"','"+req.body.lieu+"','"+req.body.diplome+"','"+req.body.experience+"','"+req.body.descEmploi+"','"+req.body.descEnt+"','"+req.body.competences+"')",function(err, result)
    {
        if (err)
            throw err;
        console.log("table created");
    });
});

app.get('/recruteurs', function(req, res) {
	// Connect to MySQL database.
	var connection = getMySQLConnection();
	connection.connect();

	// Do the query to get data.
	connection.query('SELECT * FROM collab WHERE id = ' + req.params.id, function(err, rows, fields) {
		var person;

	  	if (err) {
	  		res.status(500).json({"status_code": 500,"status_message": "internal server error"});
	  	} else {
	  		// Check if the result is found or not
	  		if(rows.length==1) {
	  			// Create the object to save the data.
	  			var person = {
		  			'name':rows[0].name,
		  			'address':rows[0].address,
		  			'phone':rows[0].phone,
		  			'id':rows[0].id
		  		}
		  		// render the details.plug page.
		  		res.render('details', {"person": person});
	  		} else {
	  			// render not found page
	  			res.status(404).json({"status_code":404, "status_message": "Not found"});
	  		}
	  	}
	});

	// Close MySQL connection
	connection.end();
});

app.listen(3000);
console.log('Example app listening at port:3000');
