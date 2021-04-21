export {};

let massInKg: number = 70;
let heightInM: number = 1.75;

let BMI = massInKg / (heightInM * heightInM);
console.log('Your BMI Index is :'+ BMI);

if (BMI <= 18.5) {
    console.log('You\'re underweight!');
  } else if (BMI >= 18.6 && BMI < 24.9  ) {
    console.log ('You\'re normal!');
  } else {
   console.log('You\'re overweight!');
  }