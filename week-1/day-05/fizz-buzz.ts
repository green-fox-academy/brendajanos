export {}




for(let a: number=0; a < 101; a++){
  
  if (a % 3 === 0 &&a % 5 === 0){
    console.log("FizzBuzz");
    continue;
  }
  if (a % 3 === 0){
    console.log("Fizz");
    continue;
}
 if (a % 5 === 0){
    console.log("Buzz");
    continue;
}   
    console.log(a);
    
}