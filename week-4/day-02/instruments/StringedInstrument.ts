'use strict';

import { instrument } from "./instrument";


export abstract class StringedInstrument extends instrument{

    
    public _numberOfStrings: number;


    constructor(name:string,numberOfStrings:number){
     super(name);
     this._numberOfStrings=numberOfStrings;
    }

    abstract sound():string;

     public play(){
        return `${this._name}, a ${this._numberOfStrings}-stringed instrument that goes ${this.sound()}.`

     }
    
   

}