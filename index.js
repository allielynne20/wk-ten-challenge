// const Generate = require('./lib/Generate');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const GeneratePage = require('./src/generatepage');

const team = [];

//funciton that generates Manager
function createManager() {

    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name.');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your ID?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your employee ID.');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your work email address.');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'What is your office number?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your office number.');
                    return false
                }
            }
        }
    ])

        .then(answers => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNum);
            team.push(manager);
            createTeam();
        })
};

function createTeam() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'teamchoice',
            message: 'What type of team member would you like to add?',
            choices: ['Engineer', 'Intern', 'No one, I am done adding team members.']
        }
    ])
        .then(answer => {
            switch (answer.teamchoice) {
                case 'Engineer':
                    createEngineer();
                    break;
                case 'Intern':
                    createIntern();
                    break;
                default:
                    buildTeam();
            }
        })
}

function buildTeam() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath, GeneratePage(team), 'utf-8');
}

//funciton that generates Engineer
function createEngineer() {

    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name.');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your ID?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your employee ID.');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your work email address.');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username.');
                    return false
                }
            }
        }
    ])

        .then(answers => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            team.push(engineer);
            createTeam();
        })
};

//function that generates Intern
function createIntern() {

    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name.');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your ID?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your employee ID.');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your work email address.');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school did you attend?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the school you\'ve attended.');
                    return false
                }
            }
        }
    ])

        .then(answers => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            team.push(intern);
            createTeam();
        })
};

createManager();