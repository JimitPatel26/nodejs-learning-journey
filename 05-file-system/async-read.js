const fs = require('fs');

fs.readFile('data/data.txt', (err, data) => {
    if (err) throw err;
    console.log("Async Read:");
    console.log(data.toString());
});