const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');
const {generateHTML, copyCSS} = require('./utils/generate-site.js');

const employees = [];

// Function to get manager inputs
const getManager = () => {
    console.log(`
    ===========
    Add a Team
    ===========

    ** Manager **
    `);
    inquirer.prompt([
        {
            type: 'input',
            name: 'teamname',
            message: 'Enter Team name (Required)',
            validate: teamnameInput => {
                if (teamnameInput) {
                    return true;
                } else {
                    console.log('Please enter Team name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'name',
            message: 'Enter Manager name (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter manager name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter Manager id (Required)',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter manager id');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter Manager email (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter manager email');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter Manager office number (Required)',
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log('Please enter manager office number');
                    return false;
                }
            }
        }
    ])
    .then(manager => {
        const managerData = new Manager(manager.name, manager.id, manager.email, manager.officeNumber, manager.teamname);
        employees.push(managerData);
        console.log(`
    ** Team Members **
        `);
        // call function toget team member inputs
        getTeamMember();
    });
};

// Function to get team member inputs
const getTeamMember = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Choose a team member role',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'Enter team member name (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter team member id (Required)',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter id');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter email (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter email');
                    return false;
                }
            }
        }
    ])
    .then(teamMember => {
        if (teamMember.role === 'Engineer') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'github',
                    message: 'Enter github username (Required)',
                    validate: githubInput => {
                        if (githubInput) {
                            return true;
                        } else {
                            console.log('Please enter github username');
                            return false;
                        }
                    }
                },
                {
                    type: 'confirm',
                    name: 'confirmAddTeamMember',
                    message: 'Would you like to add another team member?',
                    default: false
                }
            ])
            .then(engineer => {
                const engineerData = new Engineer(teamMember.name, teamMember.id, teamMember.email, engineer.github);
                employees.push(engineerData);
                if (engineer.confirmAddTeamMember) {
                    return getTeamMember();
                }
                if (engineer.confirmAddTeamMember === false) {
                    createWebsite();
                }
            })
        }

        if (teamMember.role === 'Intern') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'school',
                    message: 'Enter school name (Required)',
                    validate: schoolInput => {
                        if (schoolInput) {
                            return true;
                        } else {
                            console.log('Please enter school name');
                            return false;
                        }
                    }
                },
                {
                    type: 'confirm',
                    name: 'confirmAddTeamMember',
                    message: 'Would you like to add another team member?',
                    default: false
                }
            ])
            .then(intern => {
                const internData = new Intern(teamMember.name, teamMember.id, teamMember.email, intern.school);
                employees.push(internData);
                if (intern.confirmAddTeamMember) {
                    return getTeamMember();
                }
                if (intern.confirmAddTeamMember === false) {
                    // call function to create html and css
                    createWebsite();
                }     
            });
        }
    });
};

// Function for write html and copy existing css files
const createWebsite = () => {
    
    const fileContent = generatePage(employees);
    generateHTML(fileContent)
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyCSS();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    });  
};

// call funtion to start by entering manager details
getManager();