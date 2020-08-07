const Manager = require('../lib/Manager');
// const Employee = require('../lib/Employee');

test('creates an manager object', () => {
    const newManager = new Manager('id');
    expect(newManager.id).toEqual(expect.any(Number))
})