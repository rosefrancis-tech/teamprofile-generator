const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('Diane', 'dianerepo');

    expect(engineer.name).toBe('Diane');
    expect(engineer.gitHubRepoName).toBe('dianerepo');
});