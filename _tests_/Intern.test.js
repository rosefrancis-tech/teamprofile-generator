const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern('Intern_1', 'id#1', 'email', 'UofT');

    expect(intern.name).toBe('Intern_1');
    expect(intern.id).toBe('id#1');
    expect(intern.email).toBe('email');
    expect(intern.school).toBe('UofT');
    expect(intern.role).toEqual(expect.stringContaining("Intern"));

});