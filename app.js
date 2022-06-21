//declare variables and import 
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generator = require("./lib/generator.js");
const pathtofinalProduct = path.resolve(__dirname,"finalProduct");
const htmltofinalProduct = path.join(pathtofinalProduct, "devTeam.html");
const teamobjectarray = [];

// Inital Manager Questions + Responses
const promptManager = () => {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
          },
          {
            type: 'input',
            name: 'id',
            message: 'What is your employee id number?',
          },
          {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
          },
          {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?',
          }   
    ])
    .then(response => {
        const ManagerInstance = new Manager (response.name, parseInt(response.id), response.email, parseInt(response.officeNumber))
        teamobjectarray.push(ManagerInstance)
    // ask for additional members function
    addTeamMember();
    })
}
// Engineer questions + responses
const promptEngineer = () => {
  inquirer.prompt ([
      {
          type: 'input',
          name: 'name',
          message: 'What is your name?',
        },
        {
          type: 'input',
          name: 'id',
          message: 'What is your employee id number?',
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is your email?',
        },
        {
          type: 'input',
          name: 'GitHub',
          message: 'What is your GitHub Username?',
        }   
  ])
  .then(response => {
      const EngineerInstance = new Engineer (response.name, parseInt(response.id), response.email, response.GitHub)
      teamobjectarray.push(EngineerInstance)
      addTeamMember();
  })}
// Final Intern questions + responses
  const promptIntern = () => {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
          },
          {
            type: 'input',
            name: 'id',
            message: 'What is your employee id number?',
          },
          {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
          },
          {
            type: 'input',
            name: 'SchoolName',
            message: 'What is the name of your school?',
          }   
    ])
    .then(response => {
        const InternInstance = new Intern (response.name, parseInt(response.id), response.email, response.SchoolName)
        teamobjectarray.push(InternInstance)
        addTeamMember();
    })}  
// offer to add additional team member or add no option
const addTeamMember = () => {
  inquirer.prompt ([
    {
      type: 'list',
      name: 'addteammember',
      message: 'Would you like to add an additional team member?',
      choices: ["Engineer", "Intern", "No"]
    },
  ]) 
  .then (response => {
    if (response.addteammember === "Engineer") {
      promptEngineer();
    }
    else if (response.addteammember === "Intern") {
      promptIntern();
    }
    else {
      init();
    }
  })
}
// add the writeFile function
const init = () => {
    
      // using promises instead to refactor code properly
      fs.writeFileSync(htmltofinalProduct, generator(teamobjectarray))
      console.log('Successfully created html in "product" folder') 
  };
  
  promptManager();