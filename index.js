const inquirer = require('inquirer');
const fs = require('fs');
const style = require("./assets/style")
const Employee = require('./emp/employee')
const Engineer = require('./emp/engineer')
const Intern = require('./emp/intern')
const Manager = require('./emp/manager')

let teamEl = [];

function newTeam() {
    inquirer.prompt([{

        message: 'Create a team name.',
        name: 'team'

    }])

    .then(function(data) {
        const teamName = data.team
        teamEl.push(teamName)
        addManager();

    })
}

function addManager() {
    inquirer.prompt([{

            message: "Please enter manager's name:",
            name: "name"

        },
        {
            message: "Please add manager's email:",
            name: "email"
        },
        {
            message: "Please add manager's office number:",
            name: "officeNumber"
        },
    ])

    .then(function(data) {
        const name = data.name
        const memberEl = teamEl.length + 1
        const email = data.email
        const officeNumber = data.officeNumber
        const teamMember = new Manager(name, memberEl, email, officeNumber)
        teamEl.push(teamMember)
        addTeam();
    });
}

function addTeam() {
    inquirer.prompt([{

            type: "list",
            message: "Would you like to add a teammember?",
            choices: ["Yes: Add an Engineer", "Yes: Add an Intern", "No: My team is complete"],
            name: "addTeammate"
        }

    ])

    .then(function(data) {
        switch (data.addTeammate) {
            case "Yes: Add an Engineer":
                addEngineer();
                break;

            case "Yes: Add an Intern":
                addIntern();
                break;

            case "No: My team is complete":
                createTeam();
                break;
        }
    });
}

function addEngineer() {
    inquirer.prompt([{

            message: "Please enter the engineer's name:",
            name: "name"

        },
        {
            message: "Please add engineer's email:",
            name: "email"
        },
        {
            message: "Please add engineer's Github profile:",
            name: "github"
        },
    ])

    .then(function(data) {
        const name = data.name
        const memberEl = teamEl.length + 1
        const email = data.email
        const github = data.github
        const teamMember = new Engineer(name, memberEl, email, github)
        teamEl.push(teamMember)
        addTeam();
    });
}

function addIntern() {
    inquirer.prompt([{

            message: "Please enter the intern's name:",
            name: "name"

        },
        {
            message: "Please add intern's email:",
            name: "email"
        },
        {
            message: "What school did the intern attend:",
            name: "school"
        },
    ])

    .then(function(data) {
        const name = data.name
        const memberEl = teamEl.length + 1
        const email = data.email
        const school = data.school
        const teamMember = new Intern(name, memberEl, email, school)
        teamEl.push(teamMember)
        addTeam();
    });
}

function createTeam() {
    console.log("Your team has been created!")

    const htmlArr = []
    const htmlCreate = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${teamEl[0]}</title>
    <link href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap" rel="stylesheet">
    <style>
     ${style}
    </style>
</head>
<body>
    <div class="banner-bar">
        <h1>${teamEl[0]}</h1>
    </div>
    <div class="card-container">
    `
    htmlArr.push(htmlCreate);

    for (let i = 1; i < teamEl.length; i++) {
        let object = `
        <div class="member-card">
            <div class="card-top">
                <h2>${teamEl[i].name}</h2>
                <h2>${teamEl[i].title}</h2>
            </div>
            <div class="card-bottom">
                <p>Employee ID: ${teamEl[i].id}</p>
                <p>Email: <a href="mailto:${teamEl[i].email}">${teamEl[i].email}</a></p>
        `
        if (teamEl[i].officeNumber) {
            object += `
            <p>${teamEl[i].officeNumber}</p>
            `
        }
        if (teamEl[i].github) {
            object += `
            <p>GitHub: <a href="https://github.com/${teamEl[i].github}">${teamEl[i].github}</a></p>
            `
        }
        if (teamEl[i].school) {
            object += `
            <p>School: ${teamEl[i].school}</p>
            `
        }
        object += `
        </div>
        </div>
        `
        htmlArr.push(object)
    }

    const htmlEnd = `
    </div>
    </body>
    </html>
    `
    htmlArr.push(htmlEnd);

    fs.writeFile(`./createdFile/${teamEl[0]}.html`, htmlArr.join(""), function(err) {

    })
}

newTeam()