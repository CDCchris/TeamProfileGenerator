const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "employeeId",
            message: "What is your Employee ID?"
        },
        {
            type: "input",
            name: "emailAddress",
            message: "What is your Email Address?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is your Office Number?"
        },
        {
            type: "list",
            name: "teamOptions",
            message: "Do you want to add a team member",
            choices: ['Engineer', 'Intern', 'Finish team']
        }
    ])



    .then((answers) => {


        if (answers.teamOptions == "Engineer") {
            inquirer
                .prompt([

                    {
                        type: "input",
                        name: "engineerName",
                        message: "Enter engineer's name"
                    },
                    {
                        type: "input",
                        name: "engineerId",
                        message: "Enter engineer's ID"
                    },
                    {
                        type: "input",
                        name: "engineerEmail",
                        message: "Enter engineer's email address"
                    },
                    {
                        type: "input",
                        name: "engineerGithub",
                        message: "Enter the engineers GitHub"
                    },
                    {
                        type: "list",
                        name: "teamOptions",
                        message: "Do you want to add a team member",
                        choices: ['Engineer', 'Intern', 'Finish team']
                    }
                ])
        } else if (answers.teamOptions == "Intern") {
            inquirer
                .prompt([

                    {
                        type: "input",
                        name: "internName",
                        message: "Enter intern's name?"
                    },
                    {
                        type: "input",
                        name: "internId",
                        message: "Enter intern's ID?"
                    },
                    {
                        type: "input",
                        name: "internEmail",
                        message: "Enter intern's email address?"
                    },
                    {
                        type: "input",
                        name: "internSchool",
                        message: "Enter the name of the interns school:"
                    },
                    {
                        type: "list",
                        name: "teamOptions",
                        message: "Do you want to add a team member",
                        choices: ['Engineer', 'Intern', 'Finish team']
                    }
                ])
        } else {
            //need to render
            render
        }

        /*fs.writeFile(outputPath)
        */

    })

