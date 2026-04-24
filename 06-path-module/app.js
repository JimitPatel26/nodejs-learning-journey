// Path Module

const pm = require("path");

path = pm.dirname("D:/something/abc.txt");
console.log(path);

path = pm.basename("D:/something/abc.txt");
console.log(path);

ext = pm.extname("D:/something/abc.txt");
console.log(ext);

path = pm.parse("D:/something/abc.txt");
console.log(path);

if (path.ext == ".txt") {
    console.log("Text Document");
} else {
    console.log("Not a text Document");
}

/*
Write a Node.js script that performs the following operations using the Path module and
the asynchronous File System (fs) module:
1. From a given existing file path, extract the directory name using the Path module.
2. Create the extracted directory inside an existing folder using the File System
module.
3. Extract the file name from the given path using the Path module.
4. Create that file inside the newly created directory and write some data into it.
5. Copy the content of this file to another file.
6. Delete the original file after copying the content.
All file operations must be performed using asynchronous methods of the fs module.
*/

const fs = require("fs");
const path = require("path");
let oldPath = "LJ/sample.txt";
let dir = path.dirname(oldPath);
let fileName = path.basename(oldPath);
let newFilePath = dir + "/" + fileName;
fs.mkdir(dir, (err) => {
    if (err) throw err;
    console.log("Directory created:", dir);
    fs.writeFile(newFilePath, "Sample Data for File", (err) => {
        if (err) throw err;
        console.log("Original file created:", newFilePath);
        fs.copyFile(newFilePath, dir + "/temp.txt", (err) => {
            if (err) throw err;
            console.log("File copied to temp.txt");
            fs.unlink(newFilePath, (err) => {
                if (err) throw err;
                console.log("Original file deleted");
                console.log("All operations completed successfully");
            });
        });
    });
});