// TODO: Include packages needed for this application
const fs = require('fs');
const axios = require("axios");
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        message: "What is the name of the project?",
        name: "title"
    },
    {
        message: "Please provide a table on content",
        name: "table of content"
    },
    {
        message: "What is the name of the user?",
        name: "userName"
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
        message: "What is the user github email address?",
        name: "GitHub user email"
    },
    {
        message: "Please provide a profile picture",
        name: "GitHub profile picture"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((inquirerResponse, data) => {
            console.log("Making ReadMe");
            fs.writeFileSync("ReadMe.md", inquirerResponse, data);
        })
        .catch((err) => {
            console.log(err);
        })
}

// Function call to initialize app
init();