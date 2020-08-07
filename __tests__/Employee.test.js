const Employee = require('../lib/Employee'); 


test('creates an employee object', () => {
    const newEmployee = new Employee('name');
    expect(newEmployee.name).toBe('name');
})

// let bob = newEmployee('Bob');
