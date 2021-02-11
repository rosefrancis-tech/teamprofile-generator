const Employee = require('../lib/Employee.js');
test('creates an employee object', () => {
    const employee = new Employee('Employee_1');

    expect(employee.name).toBe('Employee_1');
});