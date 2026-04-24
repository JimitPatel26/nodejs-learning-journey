/*
Write node Example with File system sync methods. (CRUD Operation)
1. To create folder
2. Create one file inside that folder
3. Append some data to that file.
4. Read data from the file
5. Rename that file
6. Delete File
*/

const fs = require('fs');

fs.mkdirSync("new_folder",{recursive : true});

fs.writeFileSync("new_folder/new_file.txt","Some Data is Here");

fs.appendFileSync("new_folder/new_file.txt","\nSome Data is Appended")

const data = fs.readFileSync("new_folder/new_file.txt","utf-8");

fs.renameSync("new_folder/new_file.txt","new_folder/renamed_file.txt");

fs.unlinkSync("new_folder/renamed_file.txt");