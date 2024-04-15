// 9. Write a JavaScript program to find the largest of three numbers.


const readlineSync = require('readline-sync');
let a = readlineSync.questionInt('Enter a: ');
let b = readlineSync.questionInt('Enter b: ');
let c = readlineSync.questionInt('Enter c: ');
const largest= Math.max(a,b,c)
console.log(largest)

