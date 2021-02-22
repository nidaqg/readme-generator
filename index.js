//include pakages and modules needed foe the CLI app
const inquirer = require("inquirer");
const fs = require("fs");

//Create an array of questions for user input
const questions = [
{
name: "project-title",
type: "input",
message: "What is your project title?",
},
{
name: "description",
type: "input",
message: "Please enter a short description of the project"    
},
{
name: "installation",
type: "input",
message: "Please enter installation instructions"   
},
{
name: "usage",
type: "input",
message: "Please enter usage information"    
},
{
name: "contribution",
type: "input",
message: "Please enter contribution guidelines"
},
{
name: "test",
type: "input",
message: "please enter test instructions"
},
{name: "license",
 type: "list",
 message: "Please choose a license type",
 choices: ["MIT", "Apache License 2.0", "GNU GPLv3", "GNU AGPLv3", "Mozilla Public License 2.0", "Boost Software License 1.0"]
},
{
name: "github",
type: "input",
message: "please enter link to your github page"
},
{
name: "email",
type: "input",
message: "please enter your email"
}
];

// TODO: Create a function to write README file
function writeToFile(data) {
      console.log(data)
}

// function to initialize app, feed questions to inquirer prompt function and call function to write data
//to readme file
function init() {
      inquirer.prompt(
            [...questions]
      )
      .then ((data) => {
      fs.writeFile('readme.md', writeToFile(data), (err) =>
      err ? console.log(err) : console.log('Success!')
          );
      });
}

// Function call to initialize app
init();

/*
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
       WHEN I enter my project title
       THEN this is displayed as the title of the README
       WHEN I enter a description, 
       installation instructions, 
       usage information, 
       contribution guidelines, and 
       test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
      WHEN I enter my GitHub username
      THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
      WHEN I enter my email address
      THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
*/