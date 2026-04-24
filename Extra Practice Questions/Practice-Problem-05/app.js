// Read data from file and sort that data in ascending order using .sort() .

const fs = require('fs');

fs.writeFileSync("s1.txt","50 -1 99 100 20 0 56 78 59");

let data = fs.readFileSync("s1.txt",'utf-8');

data = data.split(" ");

d = data.sort((a,b)=>b-a);

console.log(d);