// Type annotation in func param
function greeter(person) {
    return "Hello, " + person;
}
// Code shows warning but still compiles to JS
//var user = [0, 1, 2];
var user = { firstName: "Jane", lastName: "User" };
document.body.textContent = greeter(user);
