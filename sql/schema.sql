DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NULL,
  salary DECIMAL(9.5) NULL,
  department_id INT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INT NULL,
  manager_id INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Engineering");
INSERT INTO department (name)
VALUES ("Accounting");
INSERT INTO department (name)
VALUES ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 1000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 1500, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 1200, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 1250, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Legal Team Lead", 2500, 4);

USE employees_db;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tim", "Allen", 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Oak", "Johns", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Johnson", 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Taylor", "Thompson", 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Michael", "Anderson", 5, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tony", "Stuart", 2, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ezekial", "Jebediah", 4, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tim", "Timothy", 1, 2);