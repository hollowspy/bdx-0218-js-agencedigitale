// Etabli la connection Mysql
let express = require('express');
let mySql = require('mysql');

function mySQLConnect() {
    this.pool = null;
    // Initi Mysql connection
    this.init = () => {
            this.pool = mysql.createPool({
                host: 'localhost',
                user: root,
                password: 'Nz1rm1995.',
                database: 'wilder'
            });
        }
        // Acquire connection and execute query on callback <-- What is that??
    this.acquire = (cb) => {
        this.pool.getConnection((err, connection) => {
            cb(err, connection);
        });
    };
}
module.exports = new mySQLConnect();