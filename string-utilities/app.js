const stringUtils = require('./stringUtils');

// Test the functions
console.log(stringUtils.capitalize('hello')); // Output: Hello
console.log(stringUtils.capitalize(undefined)); // Output: Empty string _____
console.log(stringUtils.reverse('world')); // Output: dlrow
console.log(stringUtils.contains('bootcamp', 'camp')); // Output: true
console.log(stringUtils.contains('bootcamp', 'code')); // Output: false