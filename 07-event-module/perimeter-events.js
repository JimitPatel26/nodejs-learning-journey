/*
Write node js script to handle events as asked below.
1) Check the radius is negative or not. If negative then display message “Radius” must
be positive” else calculate the perimeter of circle.

2) Check side is negative or not. If negative then display message “Side must be
positive” else calculate the perimeter of square.
*/

let eventemitter = require('events');
let ee = new eventemitter();

ee.on("negradius", () => {
    console.log("Radius Must be postive");
})

ee.on("negside", () => {
    console.log("Side Must be postive");
})

ee.on("findval", (r, s) => {
    if (r < 0) {
        ee.emit("negradius");
    } else {
        var rperi = 2 * 3.14 * r;
        console.log(rperi);
    }
    if (s < 0) {
        ee.emit("negside");
    }
    else {
        var speri = 4 * s;
        console.log(speri);
    }
})
ee.emit("findval", 10, 3);