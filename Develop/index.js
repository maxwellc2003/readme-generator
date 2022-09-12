// TODO: Include packages needed for this application
const fs = require('fs');
const axios = require("axios");
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown");
path = require('path');

// TODO: Create an array of questions for user input
const questions = [
    {
        message: "What is the name of the project?",
        name: "title"
    },
    {
        message: "What is the name of the user?",
        name: "username"
    },
    {
        message: "Please provide a description of the project",
        name: "description"
    },
    {
        message: "What is the installation process?",
        name: "installation"
    },
    {
        message: "How will this project be used?",
        name: "usage"
    },
    {
        message: "What licenses are required with this project?",
        name: "licenses"
    },
    {
        message: "Who were the contributors to this project?",
        name: "contribution"
    },
    {
        message: "What is the test process for this project?",
        name: "test"
    },
    {
        message: "What is your email address?",
        name: "email"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { fs.writeFileSync(path.join(process.cwd(), fileName), data); }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((inquirerResponse, data) => {
            console.log("Making ReadMe");
            writeToFile("README.md", markdown({ ...inquirerResponse }))
        })
        .catch((err) => {
            console.log(err);
        })
}

// Function call to initialize app
init();