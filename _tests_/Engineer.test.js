const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('Engineer_1','id#1','email', 'Eng_1_repo');

    expect(engineer.name).toBe('Engineer_1');
    expect(engineer.id).toBe('id#1');
    expect(engineer.email).toBe('email');
    expect(engineer.github).toBe('Eng_1_repo');
    expect(engineer.role).toEqual(expect.stringContaining("Engineer"));

});