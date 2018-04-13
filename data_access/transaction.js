//methods for fetching mysql data  
let connection = require('../connection/mySqlConnect.js');

function Transaction() {
    // get all users data   
    this.getAllContacts = (res) => {
        // initialize database connection  
        connection.init();
        // calling acquire methods and passing callback method that will be execute query  
        // return response to server   
        connection.acquire((err, con) => {
            con.query('SELECT * FROM contact', (err, result) => {
                con.release();
                res.send(result);
            });
        });
            console.log(result)
    };
}

module.exports = new Transaction();