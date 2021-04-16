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
        "Remove Employee",
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
            case "Remove Employee":
              removeEmployee();
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

  connection.query(query, (err, res) => {
    if (err) throw err;

    console.table(res);   

    init();
  });
};

 const addEmployee = () => {

  var query =
    `SELECT r.id, r.title, r.salary 
      FROM role r`

  connection.query(query, (err, res) => {
    if (err) throw err;

    const roleChoices = res.map(({ id, title, salary }) => ({
      value: id, title: `${title}`, salary: `${salary}`
    }));

    console.table(res);    

    insertEmployee(roleChoices);
  });
 };
 
 const insertEmployee = (roleChoices) => {

  inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: "What is the employee's first name?"
      },
      {
        type: "input",
        name: "lastName",
        message: "What is the employee's last name?"
      },
      {
        type: "list",
        name: "roleId",
        message: "What is the employee's role?",
        choices: roleChoices
      },
    ]).then((answer) => {
      console.log(answer);

      var query = `INSERT INTO employee SET ?`      
      connection.query(query,
        {
          first_name: answer.firstName,
          last_name: answer.lastName,
          role_id: answer.roleId,
          manager_id: answer.managerId,
        },
        (err, res) => {
          if (err) throw err;

          console.table(res);
          console.log(res.insertedRows + "Inserted successfully!\n");

          init();
        });      
    });
};



connection.connect((err) => {
  if (err) throw err;
  init();
});