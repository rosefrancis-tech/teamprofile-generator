const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Employee_1', 'id_1', 'email_1');

    expect(employee.name).toBe('Employee_1');
    expect(employee.id).toBe('id_1');
    expect(employee.email).toBe('email_1');
});