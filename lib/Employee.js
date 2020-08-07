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

    // askQuestions() {
    //     inquirer
    //         .prompt([
    //             {
    //                 type: 'input',
    //                 name: 'name',
    //                 message: 'What is your name?',
    //                 validate: nameInput => {
    //                     if (nameInput) {
    //                         return true;
    //                     } else {
    //                         console.log('Please enter your name.');
    //                         return false
    //                     }
    //                 }
    //             },
    //             {
    //                 type: 'input',
    //                 name: 'id',
    //                 message: 'What is your ID?',
    //                 validate: nameInput => {
    //                     if (nameInput) {
    //                         return true;
    //                     } else {
    //                         console.log('Please enter your employee ID.');
    //                         return false
    //                     }
    //                 }
    //             },
    //             {
    //                 type: 'input',
    //                 name: 'email',
    //                 message: 'What is your email address?',
    //                 validate: nameInput => {
    //                     if (nameInput) {
    //                         return true;
    //                     } else {
    //                         console.log('Please enter your work email address.');
    //                         return false
    //                     }
    //                 }
    //             },
    //             {
    //                 type: 'checkbox',
    //                 name: 'finished',
    //                 choices: ['Yes', 'No, please print the employee list.']
    //             }
    //         ])
    //         //destructure name from the prompt object
    //         .then(({name}) => {
    //             this.person = new Employee(name);
    //             //test to see if it's created 
    //         })

    //         .then(({id}) => {
    //             this.person = new Employee(id);
    //         })

    //         .then(({email}) => {
    //             this.person = new Employee(email);
    //         })

    // }

}

// console.log(new Employee());

module.exports = Employee;