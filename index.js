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
const HtmlGenerator = require("./src/IndexTemplate");

class RunApplication {
  constructor() {
    this.manager = [];
    this.engineer = [];
    this.intern = [];
    this.employeeType = "";
  }
  getEmployee() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the team manager's name?",
          validate: (managersName) => {
            if (managersName) {
              return true;
            } else {
              console.log("Please enter your manger's name");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "id",
          message: "What is your team manager's id?",
          validate: (managersName) => {
            if (managersName) {
              return true;
            } else {
              console.log("Please enter your manager's id");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "email",
          message: "What is the team manager's email?",
          validate: (managersName) => {
            if (managersName) {
              return true;
            } else {
              console.log("Please enter your manager's email");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "officeNumber",
          message: "What is the team manager's office number?",
          validate: (managersName) => {
            if (managersName) {
              return true;
            } else {
              console.log("Please enter your manager's office number");
              return false;
            }
          },
        },
      ])
      .then((answers) => {
        this.managerEmployee = new Manager(answers);
        this.manager.push(this.managerEmployee);
        this.getEmployeeType();
      });
  }

  getEmployeeType() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "employeeType",
          message: "Which type of member would you like to add?",
          choices: ["Engineer", "Intern"],
        },
      ])
      .then((answers) => {
        const { employeeType } = answers;
        this.employeeType = employeeType;
        this.getFurtherInformation();
      });
  }

  getFurtherInformation() {
    if (this.employeeType === "Intern") {
      inquirer
        .prompt([
          {
            type: "input",
            name: "name",
            message: "What is the Intern's name?",
            validate: (managersName) => {
              if (managersName) {
                return true;
              } else {
                console.log("Please enter your Intern's name");
                return false;
              }
            },
          },
          {
            type: "input",
            name: "id",
            message: "What is the Intern's id?",
            validate: (managersName) => {
              if (managersName) {
                return true;
              } else {
                console.log("Please enter your Intern's id");
                return false;
              }
            },
          },
          {
            type: "input",
            name: "email",
            message: "What is the Intern's email?",
            validate: (managersName) => {
              if (managersName) {
                return true;
              } else {
                console.log("Please enter your intern's email");
                return false;
              }
            },
          },
          {
            type: "input",
            name: "school",
            message: "What is the Intern's School Name?",
            validate: (managersName) => {
              if (managersName) {
                return true;
              } else {
                console.log("Please enter your Intern's School name");
                return false;
              }
            },
          },
        ])
        .then((answers) => {
          this.internEmployee = new Intern(answers);
          this.intern.push(this.internEmployee);
          this.addAnotherEmployee();
        });
    } else if (this.employeeType === "Engineer") {
      inquirer
        .prompt([
          {
            type: "input",
            name: "name",
            message: "What is the Engineer's Name?",
            validate: (managersName) => {
              if (managersName) {
                return true;
              } else {
                console.log("Please enter your Engineer's name");
                return false;
              }
            },
          },
          {
            type: "input",
            name: "id",
            message: "What is the Engineer's id?",
            validate: (managersName) => {
              if (managersName) {
                return true;
              } else {
                console.log("Please enter your engineer's id");
                return false;
              }
            },
          },
          {
            type: "input",
            name: "email",
            message: "What is the Engineer's email?",
            validate: (managersName) => {
              if (managersName) {
                return true;
              } else {
                console.log("Please enter your engineer's email");
                return false;
              }
            },
          },
          {
            type: "input",
            name: "gitHub",
            message: "What is the Engineer's GitHub username?",
            validate: (managersName) => {
              if (managersName) {
                return true;
              } else {
                console.log("Please enter your Engineer's GitHub username");
                return false;
              }
            },
          },
        ])
        .then((answers) => {
          this.engineerEmployee = new Engineer(answers);
          this.engineer.push(this.engineerEmployee);
          this.addAnotherEmployee();
        });
    } else {
    }
  }

  addAnotherEmployee() {
    inquirer
      .prompt([
        {
          type: "confirm",
          name: "addAnotherEmployee",
          message: "Would you like to add another employee?",
          default: false,
        },
      ])
      .then((answers) => {
        if (answers.addAnotherEmployee) {
          this.getEmployeeType();
        } else {
          this.addHtmTemplate(this.manager, this.engineer, this.intern);
        }
      });
  }

  addHtmTemplate(objManager, objEngineer, objIntern) {
    const htmlgenerator = new HtmlGenerator();
    this.writeHtml(htmlgenerator.getHtml(objManager, objEngineer, objIntern));
  }
  writeHtml(htmlTemplate) {
    writeFile(htmlTemplate);
  }
}

new RunApplication().getEmployee();
