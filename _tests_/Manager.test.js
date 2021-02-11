const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('Manager_1', '999-999-9999');

    expect(manager.name).toBe('Manager_1');
    expect(manager.officeNumber).toBe('999-999-9999');
});