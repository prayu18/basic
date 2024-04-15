// 4. Take two numbers a,b and only print the decimal part of the result obtained when a is divided by b.


const readlineSync = require('readline-sync');
let a = readlineSync.questionInt('Enter a: ');
let b = readlineSync.questionInt('Enter b: ');
const div=a/b
const decimal=div%1
console.log(decimal)