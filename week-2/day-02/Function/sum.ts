export{}

// Write a function called `sum()` that returns the sum of numbers from zero to the given parameter

export{}


function sum(GivenParameter:number): number{
    let sum: number=0;
    for(let i: number=0;i <GivenParameter; i++){
        sum += i;

    }

 return sum;
}

console.log(sum(5));
