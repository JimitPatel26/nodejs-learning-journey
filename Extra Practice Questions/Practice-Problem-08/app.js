/*

Create JSON object which contains array of objects. Calculate perimeter of square and
perimeter of circle by using side value and diameter value respectively. Write object as well
as perimeter values of square and circle in shape.txt file.

*/
const shape =[
    {
        name: "circle",
        diameter: 8
    },
    {
        name: "square",
        side: 10
    }
]


const fs = require("fs");
fs.writeFileSync("data/shape.txt",JSON.stringify(shape));
let data =  fs.readFileSync("data/shape.txt",'utf-8');
data = JSON.parse(data);
var perimeter_circle = (data[0].diameter/2)*Math.PI*2;
console.log(perimeter_circle.toFixed(2));
var perimeter_square = data[1].side*4;
console.log(perimeter_square);
