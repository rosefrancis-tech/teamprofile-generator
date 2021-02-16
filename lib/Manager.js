const Employee = require('../lib/Employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNumber, teamName) {
        super(name, id, email);

        this.officeNumber = officeNumber;
        this.role = "Manager";
        this.teamName = teamName;
    };
/*
    getOfficeNumber() {
        return this.officeNumber;
    };
    
    getRole() {
        return this.role;
    };
*/  
};

module.exports = Manager;