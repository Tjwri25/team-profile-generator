const Intern = require('../lib/Intern.js');

test ('creates an intern object', () => {
    const intern = new Intern('John Smith', '1234', 'john@john.com', 'College');
    expect(intern.name).toBe('John Smith');
    expect(intern.id).toBe('1234');
    expect(intern.email).toBe('john@john.com');
    expect(intern.school).toBe('College');
});

test("gets intern's school", () => {
    const intern = new Intern('John Smith', '1234', 'john@john.com', 'College');
    expect(intern.getSchool()).toEqual(expect.stringContaining('College'));
});

test("gets intern's role", () => {
    const intern = new Intern('John Smith', '1234', 'john@john.com', 'College');

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});