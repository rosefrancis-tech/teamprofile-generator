const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern('Intern_1', 'UofT');

    expect(intern.name).toBe('Intern_1');
    expect(intern.school).toBe('UofT');
});