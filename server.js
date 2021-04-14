const inquirer = require("inquirer");
const mysql = require("mysql2");

const express = require('express');
const sequelize = require('./config/connection');

// Import model to sync table with database
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));









// Force true to drop/recreate table(s) on every sync
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
