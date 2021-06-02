const Engineer = require('../lib/Engineer.js')

test('creates an engineer object', () => {
    const engineer = new Engineer ('John Smith', '1234', 'john@john.com', 'johnsmithgit')
    
    expect(engineer.name).toBe('John Smith');
    expect(engineer.id).toBe('1234');
    expect(engineer.email).toBe('john@john.com');
    expect(engineer.github).toBe('johnsmithgit');
});

test ("gets engineer's github username", () => {
    const engineer = new Engineer ('John Smith', '1234', 'john@john.com', 'johnsmithgit')

    expect(engineer.getGithub()).toEqual(expect.stringContaining('johnsmithgit'));
});

test("gets engineer's role", () => {
    const engineer = new Engineer ('John Smith', '1234', 'john@john.com', 'johnsmithgit')

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});