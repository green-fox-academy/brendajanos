export {}


// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is


let lineCount: number = 4;

for (let i = 1; i <= lineCount; i++) { 
      let stars = ""; 
      for (let j = 1; j <= (2 * lineCount - 1); j++) { 
         (j >= lineCount + 1 - i && j <= lineCount - 1 + i) ? stars += "*" : stars += " "; 
       } 
      console.log(stars); 
     } 