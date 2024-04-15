
// 12. Write a JavaScript program to convert temperature from Celsius to Fahrenheit and vice versa.


const readlineSync = require('readline-sync');
let temp = readlineSync.questionInt('Enter temp: ');

const Fahrenheit=(9/5)*temp+32
const celsius=(5/9)*(Fahrenheit-32)
console.log(Fahrenheit)
console.log(celsius)