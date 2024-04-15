// 5. Take marks in 5 subjects A,B,C,D,E and print out the average of marks from five subject marks.

const readlineSync = require('readline-sync');
let sub1 = readlineSync.questionInt('Enter sub1: ');
let sub2 = readlineSync.questionInt('Enter sub2: ');
let sub3 = readlineSync.questionInt('Enter sub3: ');
let sub4 = readlineSync.questionInt('Enter sub4: ');
let sub5 = readlineSync.questionInt('Enter sub5: ');

const avg=(sub1+sub2+sub3+sub4+sub5)/5
console.log(avg)