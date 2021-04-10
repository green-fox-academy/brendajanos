export {}


let a: number = 0;


while (a < 101) {
  
  if (a % 3 === 0){
      console.log("Fizz");
  }
  else if (a % 5 === 0){
      console.log("Buzz");
  }
  console.log(a); 
  a++;

}