const Employee = require('../lib/Employee.js');

class Engineer extends Employee{
    constructor(name, repoName) {
        super(name);

        this.gitHubRepoName = repoName;
    }

}

module.exports = Engineer;