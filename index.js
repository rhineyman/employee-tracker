const inquirer = require("inquirer");
const connection = require('./config/connection');
// const consTable = require("console.table");

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

  var query =
    `SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager
  FROM employee e
  LEFT JOIN role r
	ON e.role_id = r.id
  LEFT JOIN department d
  ON d.id = r.department_id
  LEFT JOIN employee m
	ON m.id = e.manager_id`

  connection.query(query, function (err, res) {
    if (err) throw err;

    console.table(res);   

    init();
  });
};

 const addEmployee = () => {

 }

connection.connect((err) => {
  if (err) throw err;
  init();
});