const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('John Smith', '123123', 'john@john.com', '3');
    
    expect(manager.name).toBe('John Smith');
    expect(manager.id).toBe('123123');
    expect(manager.email).toBe('john@john.com');
    expect(manager.officeNumber).toBe('3');
});

test("gets employee's role", () => {
    const manager = new Manager('John Smith', '123123', 'john@john.com', '3');

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});