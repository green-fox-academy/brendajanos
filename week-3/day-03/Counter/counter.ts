'use strict'
export{}


/*
Counter

    Create a Counter class
        which has a counter (number) field
        at creation it should have a default value 0 or can be specified by a parameter
        we can add another whole number to this counter: add(number)
        we can just increase the counter's value by one: add() (no parameters)
        we can get() the current counter value
        and we can reset() the counter to the initial value
    use export Counter at the end of your file
    Check if everything is working fine with the proper test
        Download counter.test.ts and place it next to your solution
        Run npm install tape @types/tape --save-dev in the root of your repository folder (where you have a package-lock.json file already)
        Run the test file with ts-node
*/

class Counter {
   counter : number 

    constructor(counter:number){
        this.counter= counter
    }

    public add() : void {
        this.counter+=1;
    }
    public get get() : number {
        return this.counter;
    }

    public reset(): void{
        this.counter == this.counter
    }
}   

let count1 = new Counter(0)

count1.add();


console.log(count1)

