// 3. Take two numbers a,b and print the exponential power of the first number raised by the second.


const readlineSync = require('readline-sync');
let a = readlineSync.questionInt('Enter a: ');
let b = readlineSync.questionInt('Enter b: ');
const pow=Math.pow(a,b)
console.log(pow)