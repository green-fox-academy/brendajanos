"use strict";
export {};

// Write a function that copies the contents of a file into another file
// It should take two filenames as parameters
// It should return a boolean that shows if the copy was successful

const fs = require("fs");

function copier(file1: string, file2: string) {
  let b: boolean = true;

  try {
    let a: string = fs.readFileSync(file1, "utf-8");

    fs.writeFileSync(file2, a);
  } catch (error) {
    b = false;
  }

  console.log(b);
}

    copier('file.txt', 'copy-of-file.txt');
    