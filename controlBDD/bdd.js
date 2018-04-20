var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "sql7.freesqldatabase.com",
  user: "sql7233310",
  password: "uWdk11MDxj",
  database : "sql7233310",
  port: 3306
 });

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  });


module.exports = connection
