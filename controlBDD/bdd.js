var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "jecode4wcs",
  database : "wild_not_you"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  });


module.exports = connection
