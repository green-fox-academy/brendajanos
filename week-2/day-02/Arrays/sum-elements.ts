export{}

// - Create a variable named `numbers`
//   with the following content: `[54, 23, 66, 12]`
// - Print the sum of the second and the third element

let numbers =[54,23,66,12];
console.log(
   numbers.reduce((a, b) => a + b, 0)
  )
 