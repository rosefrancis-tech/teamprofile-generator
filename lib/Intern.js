const Employee = require('../lib/Employee.js');

class Intern extends Employee{
    constructor(name, school) {
        super(name);

        this.school = school;
    }

}

module.exports = Intern;