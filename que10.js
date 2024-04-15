// 10. Write a JavaScript program to check whether a number is even or odd.


const readlineSync = require('readline-sync');
let num= readlineSync.questionInt('Enter num: ');

if (num%2==0){
    console.log("even")
}
else {
    console.log("odd")
}