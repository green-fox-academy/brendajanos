'use strict'
export{}


// Write a function that is able to manipulate a file
// by writing your name into it as a single line.
// The file should be named "my-file.txt".
// In case the program is unable to write the file,
// it should print the following error message: "Unable to write file: my-file.txt".

const fs = require('fs');

let fileContent = 'János Brenda';
let writing = fs.writeFileSync('my-file.txt', fileContent);

try {
    let writing = fs.writeFileSync('my-file.txt', fileContent);
}

catch (error){
    console.log('Unable to write file: my-file.txt');
}