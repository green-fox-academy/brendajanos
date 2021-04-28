'use strict';
import {Person} from './person';

export class Student extends Person {
    private _skippedDays: number;
    private _previousOrganization: string;

    constructor(name?: string, age?: number, gender?: string, previousOrganization?: string){
        super(name,age,gender);
        this._previousOrganization = previousOrganization || 'The School of Life';
        this._skippedDays = 0;
    }

    public specialIntroduce(): string {
        return `from ${this._previousOrganization} who skipped ${this._skippedDays} days from the course already.'`
    }

    public specialGoal(): string {
        return `Be a junior software developer.`;
    }

    public skipDays(numberofDays:number) {
         this._skippedDays += numberofDays;
    }
    
}




let a = new Person();
console.log(a.introduce());
console.log(a.getGoal());
let b = new Student('Jucika',19,'female','GFA');
console.log(b.introduce());
console.log(b.getGoal());