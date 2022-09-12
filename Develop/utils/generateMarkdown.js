function generateMarkdown(response) {
    return `

# ${response.title}

# Table of Content
-[Username](#username)
-[Description](#description)
-[Installation](#installation)
-[Usage](#usage)
-[Licenses](#licenses)
-[Contribution](#contribution)
-[Test](#test)
-[Contact](#email)

## Username:
[github.com/${response.username}](#github.com/${response.username})

## Description:
${response.description}

## Installation:
${response.installation}

## Usage:
${response.usage}

## Licenses:
${response.licenses}

## Contribution:
${response.contribution}

## Test:
${response.test}

## Questions?
${response.email}
`;
}

module.exports = generateMarkdown;

// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

// module.exports = generateMarkdown;
