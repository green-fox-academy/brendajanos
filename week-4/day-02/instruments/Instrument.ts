'use strict';
import {StringedInstrument} from './StringedInstrument'
export abstract class instrument {
    

    constructor(protected _name:string){
        
    }
  
    abstract play():string

}



  
