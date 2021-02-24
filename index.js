//include pakages and modules needed for the CLI app
const inquirer = require("inquirer");
const fs = require("fs");
const generateFile = require("./utils/generateMarkdown");

//Create an array of questions for user input
const questions = [
{
name: "title",
type: "input",
message: "What is your project title?",
},
{
name: "description",
type: "input",
message: "Please enter a short description of the project:"    
},
{
name: "installation",
type: "input",
message: "Please enter instructions for installation of your application:"   
},
{
name: "usage",
type: "input",
message: "Please enter information on how to use your application:"    
},
{
name: "test",
type: "input",
message: "please enter test instructions if any:"
},
{name: "license",
 type: "list",
 message: "Please choose a license type:",
 choices: ["MIT", "Apache License", "GNU GPLv3", "GNU AGPLv3", "Mozilla Public License", "Boost Software License", "None"]
},
{
name: "github",
type: "input",
message: "please enter your github username:"
},
{
name: "email",
type: "input",
message: "please enter your email:"
},
{
name: "writecontribution",
type: "input",
message: "If applicable, please enter guidelines for any contributors",
}
];


// function to initialize app, start question prompts and call function to write data
//to readme file
function init() {
      inquirer.prompt(
            [...questions]
      )
      .then ((data) => {
       try {
      fs.writeFileSync('sampleREADME.md', generateFile(data));
      console.log('Success! Your README has been created!');
      } catch (error) {
            console.log(error);
      }
})
};
// Function call to initialize app
init();
