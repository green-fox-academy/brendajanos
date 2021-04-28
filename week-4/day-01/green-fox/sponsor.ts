'use strict'

import {Person} from './person';

export class Sponsor extends Person{

    
    private _company: string;
    private _hiredStudents: number;

     constructor(name?: string, age?: number, gender?: string, company?: string, hiredStudents?: number){
         super (name,age,gender);
         this._company = company || 'Google'
         this._hiredStudents = hiredStudents || 0;

}
 public specialIntroduce (){
     return `who represents ${this._company} and hired ${this._hiredStudents} students so far.'`
 }

public hire (){
    this._hiredStudents ++;

}

   public getGoal(){
       return 'My goal is: Educate brilliant junior software developers.';
   }

}


let a = new Sponsor ('Józsi',58,'male','Amazon',12);
let b = new Sponsor ();
b.hire();

console.log(a.introduce())
console.log(b.introduce())
