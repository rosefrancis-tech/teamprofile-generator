const { expect } = require('@jest/globals');
const Manager = require('../lib/Manager.js');

test('creates a Manager object', () => {
    const manager = new Manager('Manager_name', 'id#1', 'email', '999-999-9999');

    expect(manager.name).toBe('Manager_name');
    expect(manager.id).toBe('id#1');
    expect(manager.email).toBe('email');
    expect(manager.officeNumber).toBe('999-999-9999');
    expect(manager.role).toEqual(expect.stringContaining("Manager"));
});
