// Write a function that takes a filename as string as a parameter
// and returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.


const fs = require('fs');


let fileContent 

try{
    fileContent = fs.readFileSync('lines.txt', 'utf-8');
}
catch(error){
    console.log('0');
    
}

function linePrinter(readFileSync:string) :number {
    let lines = fileContent.split(/\r\n|\r|\n/);
    return lines.length;
}






console.log(linePrinter(fileContent));
