# README generator using node.js Application

## User Story
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project

## Description

This project called for the creation of a command line application using Node.js that would prompt the user with several questions and generate a professional README from the responses. The app requires the 'inquirer' npm which must be installed before the app can run. 

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing Guidelines](#contributing)
* [License](#license)
* [Questions](#questions)

## Installation
 To run this command line application, the npm package 'inquirer' must be installed within the relevent directory. To install the package, use the command 'npm install' from your command line (the package.json download is already provided so only installation is required).

## Usage 
To run the application, use the command 'node index.js' from your command line. You will then be presented with a series of prompts. Each prompt must be answered for the application to proceed, validation methods have been added to the index.js file to prevent user from moving forward with the application if no input is given. 
Once all prompts have been answered, a README will be generated dynamically with the answers of the prompts under their relevant headings. A table of contents will also be added with clickable links to the relevant sections of the README.
A badge for ther choosen license will be added to the top of the README as well as to the license section. Links to the license agreement, the user's github repo as well as the user provided email address will also be added to the relevant sections of the README.

The file entitled 'sampleREADME.md' is the samplec readme generated using this project.

## Contributing
 [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)
 Link to Contributor's Covenant: https://www.contributor-covenant.org/version/2/0/code_of_conduct/
 
## License
![badge](https://img.shields.io/badge/license-MIT-orange)
   
Copyright (c) [2021] [Nida Ghuman]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. 

## Questions

The repo for this project can be found here: https://github.com/nidaqg/readme-generator 

For any questions or to report issues, email me at: nidaqg@gmail.com
