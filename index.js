const inquirer = required('inquirer');
const fs = required('fs');

let teamEl = [];

function team() {
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

            message: "What is the team manager's name?",
            name: "name"

        },
        {
            message: "Please add Email.",
            name: "email"
        },
        {
            type: "number",
            message: "Please add Office number",
            name: "office"
        },
    ])

    .then(function(data) {
        const name = data.name
        const memberEl = 1
        const email = data.email
        const office = data.office
        const teamMember = new Manager(name, memberEl, email, office)
        teamEl.push(teamMember)
        addTeam();
    });
}