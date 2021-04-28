'use strict';



/*Number adder

Write a recursive function that takes one parameter: n and adds numbers from 1 to n. */





function numberadder(n:number) {

    console.log(n);

    let newNumber = n + 1;

    if (newNumber < 1000) {
        numberadder(newNumber);
    }
}

numberadder(70)