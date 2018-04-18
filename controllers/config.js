var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'sql7.freesqldatabase.com',
  user     : 'sql7233310',
  password : 'uWdk11MDxj',
  database : 'sql7233310'
});
connection.connect(function(err){
if(!err) {
    console.log("Database is connected");
} else {
    console.log("Error while connecting with database");
}
});
module.exports = connection;
