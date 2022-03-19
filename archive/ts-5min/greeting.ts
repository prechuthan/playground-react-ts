// Class declaration with constructor
class Student {
    fullName: string;

    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

// Description of Person interface
interface Person {
    firstName: string;
    lastName: string;
}

// Type annotation in func param
function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

// Code shows warning but still compiles to JS
//var user = [0, 1, 2];

let user = { firstName: "Jane", lastName: "User"}

document.body.textContent = greeter(user);
