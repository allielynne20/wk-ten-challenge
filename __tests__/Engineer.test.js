const Engineer = require('../lib/Engineer'); 

test('creates an employee object', () => {
    const newEmployee = new Employee('name');
    expect(newEmployee.name).toBe('name');
})