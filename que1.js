// 1. Take two numbers a,b and print the sum, difference, product, quotient and modulus of a & b.
const readlineSync = require('readline-sync');

let a = readlineSync.questionInt('Enter a: ');
let b = readlineSync.questionInt('Enter b: ');

console.log("Sum:", a + b);
console.log("Difference:", a - b);
console.log("Product:", a * b);
console.log("Quotient:", a / b);
console.log("Modulus:", a % b);

