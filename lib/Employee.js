class Employee {
    constructor(name, id, email) {
        // if (!name || !id || !email) throw new Error('You must include this criteria.')
        this.name = name;
        this.id = id;
        this.email = email;
        console.log('\n----------------------\n');
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }

}

// console.log(new Employee());

module.exports = Employee;