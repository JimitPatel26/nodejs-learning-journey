const fs = require('fs');

// Async UTF-8
fs.readFile('data.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log("Async UTF-8:");
    console.log(data);
});

// Sync UTF-8
const dataSync = fs.readFileSync('data.txt', 'utf-8');

console.log("Sync UTF-8:");
console.log(dataSync);