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
message: "Please enter a short description of the project"    
},
{
name: "installation",
type: "input",
message: "Please enter instructions for installation of your application"   
},
{
name: "usage",
type: "input",
message: "Please enter information on how to use your application"    
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
},
/*{
name: "contribution",
type: "confirm",
message: "Would you like to add Contributor Covenant contribution guidelines to your project?"
},
{
name: "own-contribution",
type: "confirm",
message: "Would you like to write your own contribution guidelines instead?",
when: (data) => data.contribution === false,
},*/
{
name: "writecontribution",
type: "input",
message: "Please enter your contribution guidelines",
//when: (data) => data.own-contribution === true,
}
];


// function to initialize app, feed questions to inquirer prompt function and call function to write data
//to readme file
function init() {
      inquirer.prompt(
            [...questions]
      )
      .then ((data) => {
       try {
      fs.writeFileSync('README.md', generateFile(data));
      console.log('Success! Your README has been created!');
      } catch (error) {
            console.log(error);
      }
})
};
// Function call to initialize app
init();
