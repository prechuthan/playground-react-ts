// Class declaration with constructor
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
// Type annotation in func param
function greeter(person) {
    return "Hello, " + person;
}
// Code shows warning but still compiles to JS
//var user = [0, 1, 2];
var user = { firstName: "Jane", lastName: "User" };
document.body.textContent = greeter(user);
