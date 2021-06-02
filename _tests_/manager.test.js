const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('John Smith', '123123', 'john@john.com', '123');
    
    expect(manager.name).toBe('John Smith');
    expect(manager.id).toBe('123123');
    expect(manager.email).toBe('john@john.com');
    expect(manager.office).toBe('123');
});

test("gets employee's role", () => {
    const manager = new Manager('John Smith', '123123', 'john@john.com', '123');

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});