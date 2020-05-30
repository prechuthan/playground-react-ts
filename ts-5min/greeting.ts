// Description of Person interface
interface Person {
    firstName: string;
    lastName: string;
}

// Type annotation in func param
function greeter(person: Person) {
    return "Hello, " + person;
}

// Code shows warning but still compiles to JS
//var user = [0, 1, 2];

let user = { firstName: "Jane", lastName: "User"}

document.body.textContent = greeter(user);
