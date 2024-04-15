// 2. Take two numbers and only print the integer part when a is divided by b.

const readlineSync = require('readline-sync');
let a = readlineSync.questionInt('Enter a: ');
let b = readlineSync.questionInt('Enter b: ');
 const div=Math.floor(a/b)
 console.log(div)