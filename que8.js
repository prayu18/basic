// 8. Take a 2 digit number and return the first and last digits.


const readlineSync = require('readline-sync');
let num = readlineSync.questionInt('Enter num: ');


const first= Math.floor(num/10 )
const last = num%10 
console.log(first)
console.log(last)