//Importing Inquirer libraries
const inquirer = require("inquirer");

//Importing all classes
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

//Importing HTML Template
const HTMLGenerator = require("./src/IndexTemplate");

//Importing HTML Writefile
const { writeFile } = require("./src/generate-html");
