/*
Write node js script and json to perform below tasks.
1. Write below object in txt file named s2.txt
{d:{a:10,b:20,c:[30,10]}}
2. Read data from the same file and perform the below tasks.
a. addition of a and b.
b. subtraction of 2nd element of c and b. (Must be positive value)
c. multiplication of elements of c.
3. Add the Output of addition, subtraction and multiplication below the object in s2.txt
file.
*/

const fs = require('fs');

const x = {d:{a:10,b:20,c:[30,10]}};

fs.writeFileSync("s2.txt",JSON.stringify(x));

let data = fs.readFileSync("s2.txt",'utf-8');

data = JSON.parse(data);

let addition = data.d.a + data.d.b;

let subtraction = Math.abs(data.d.c[1]-data.d.b);

let multiplication = data.d.c[0]*data.d.c[1];

console.log(`Addition of a and b is : ${addition}`);

console.log(`subtraction of 2nd element of c and b is : ${subtraction}`);

console.log(`multiplication of elements of c is : ${multiplication}`);

fs.appendFileSync("s2.txt",`\nAddition of a and b is ${addition}`);

fs.appendFileSync("s2.txt",`\nsubtraction of 2nd element of c and b is ${subtraction}`);

fs.appendFileSync("s2.txt",`\nmultiplication of elements of c is ${multiplication}`);
