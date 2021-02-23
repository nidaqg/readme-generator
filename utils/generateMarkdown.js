// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## License Badge

## Description 
 ${data.description}
## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation
 ${data.installation}
## Usage 
 ${data.usage}
## License
 ${data.license}
## Contributing
 ${data.writecontribution}
## Tests
${data.test}

## Questions

Find me on gitHub: ${data.github}

For any questions or queries, email me at: ${data.email}
`;
}

module.exports = generateMarkdown;
