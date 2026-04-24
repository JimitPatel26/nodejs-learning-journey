/*
Write a node.js script to copy contents of one file to another file. Data should be fetched
from Source.txt and insert to destination.txt. And read data from destination file in the
end. Perform all these tasks asynchronously.
*/
const fs = require('fs');

fs.writeFile('Source.txt', 'ABC', (err) => {
    if (err) throw err;
    console.log("Source file created.");
    fs.readFile('Source.txt', 'utf-8', (err, data) => {
        if (err) throw err;
        console.log("Data read from source:", data);
        fs.writeFile('destination.txt', data, (err) => {
            if (err) throw err;
            console.log("Data copied to destination.txt");
            fs.readFile('destination.txt', 'utf-8', (err, data1) => {
                if (err) throw err;
                console.log("Destination file content:", data1);
            });
        });
    });
});