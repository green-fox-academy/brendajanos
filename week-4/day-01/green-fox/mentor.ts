'use strict'

import {Person} from './person';

export class Mentor extends Person {

    private _level: string;

   constructor(name?: string, age?: number, gender?: string, level?: string){
       super (name,age,gender);
        this._level= level || 'intermediate'
  }

   public getGoal(){
       return 'My goal is: Educate brilliant junior software developers.';
   }

 public specialIntroduce(): string {
    return `${this._level} mentor.`
    }


}

let a =new Mentor('Aladár',25,'male','intermediate');
let b =new Mentor();

console.log(a.introduce());
console.log(a.getGoal());
console.log(b.introduce());
