/*
Write node JS script to write an array of objects with properties name and age in a file
named student.txt. Then read the file and display the object on console.
*/


const students = [
    {
        name : "ABC",
        age : 30
    },
    {
        name : "XYZ",
        age : 32
    }
]

let fs = require('fs');
fs.writeFileSync("student.txt",JSON.stringify(students));
let data = fs.readFileSync("student.txt",'utf-8');

data = JSON.parse(data);
console.log(data);
