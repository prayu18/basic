
// 7. Take a number and print out the last digit of the number.

const readlineSync = require('readline-sync');
let num = readlineSync.questionInt('Enter num: ');

console.log(num%10)