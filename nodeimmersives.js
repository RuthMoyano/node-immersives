// Check the get-input.js code as well as the README for the lowdown on the beefing up we've done!
const getInput = require("./get-input.js");

const firstName = getInput(0);
const lastName = getInput(1);
const fullName = firstName + ' ' + lastName;
const emailAddress = firstName.toLowerCase() + '.' + lastName.toLowerCase() + '@codeimmersives.com';

console.log('Hi ' + firstName + ' ' + lastName + ', how are you?');
console.log('Your name uppercase would be ' + fullName.toUpperCase());
console.log('Your initials are ' + firstName[0] + '.' + lastName[0] + '.');
console.log('Your email address for school is ' + emailAddress);