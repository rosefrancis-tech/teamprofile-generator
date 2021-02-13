const Manager = require('./lib/Manager');
const generatePage = require('./src/page-template');
const generateHTML = require('./utils/generate-site.js');
const inquirer = require('inquirer');
const employees = [];

const getManager = () => {
    console.log(`
    ======================================
    Add a Team by entering Manager details
    ======================================
    `);
    inquirer.prompt([
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
        const managerData = new Manager(manager.name, manager.id, manager.email, manager.officeNumber);
        employees.push(managerData);
        return generatePage(employees);
    })
    .then(fileContent => {
        return generateHTML(fileContent);
    });
};

getManager();
