const inquirer = require("inquirer");
const connection = require('./config/connection');


const init = () => {
    inquirer.prompt({
      type: "list",
      name: "tasks",
      message: "What task would you like to complete?",
      choices: [
        "View Employees",
        "Add Employee",
        "Add Role",
        "Quit"
      ]
    }).then(({tasks}) => {
          switch (tasks) {
            case "View Employees":
              viewEmployees();
              break;
            case "Add Employee":
              addEmployee();
              break;
            case "Add Role":
              addRole();
              break;
            case "Quit":
              connection.end();
              break;
          }
});
};

const viewEmployees = () => {

};

connection.connect((err) => {
  if (err) throw err;
  init();
});