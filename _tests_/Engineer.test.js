const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('Engineer_1', 'Eng_1_repo');

    expect(engineer.name).toBe('Engineer_1');
    expect(engineer.gitHubRepoName).toBe('Eng_1_repo');
});