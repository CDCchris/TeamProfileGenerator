const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const teamInfo = [];

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

function init() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the managers name?"
            },
            {
                type: "input",
                name: "employeeId",
                message: "What the Manager's ID?"
            },
            {
                type: "input",
                name: "emailAddress",
                message: "What the Managers Email Address?"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What the Managers Office Number?"
            },
        ])
        .then((answers) => {
            // what to do with the responses from the user???
            const managerInfo = new Manager(answers.name, answers.employeId, answers.emailAddress, answers.officeNumber);
            teamInfo.push(managerInfo)

            // need to now ask if the user the menu
            menu()
        })
}

function finishTeam(){
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamInfo), "utf-8")
}



function menu() {
    inquirer
        .prompt(
            {
                type: "list",
                name: "teamOptions",
                message: "Do you want to add a team member",
                choices: ['Engineer', 'Intern', 'Finish team']
            }
        )
        .then((answers) => {

            switch (answers.teamOptions) {
                case 'Engineer':
                    engineerPrompt()
                    break;
                case 'Intern':
                    internPrompt()
                    break;
                case 'Finish team':
                    finishTeam()
                    break;
            }
        })
}


function engineerPrompt() {
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
        ])
        .then((answers) => {
            const engineerInfo = new Engineer(answers.Engineername, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamInfo.push(engineerInfo)

            menu()
        })
}

function internPrompt() {
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

        ])
        .then((answers) => {

            const internInfo = new Engineer(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamInfo.push(internInfo)

            menu()
        })

}

// build the function that will write the html



init()