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