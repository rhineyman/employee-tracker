const mysql = require("mysql");
require ("dotenv").config();

const connection = mysql.createConnection({
  host: 'localhost',  
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATA,
});

module.exports = connection