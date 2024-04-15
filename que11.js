
// 11. Write a JavaScript program to check whether a given number is prime or not.


const readlineSync = require('readline-sync');
let num = readlineSync.questionInt('Enter num: ');


c=0 
for (let i=1;i<=num;i++) {
    if (num%i==0){
        c++
    }
}
if (c>2){
    console.log("prime")
}
else {
    console.log("not prime")
}