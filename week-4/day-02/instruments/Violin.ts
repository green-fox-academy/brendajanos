'use strict';


import {StringedInstrument} from './StringedInstrument'

class Violin extends StringedInstrument {

    
    public sound():string{
        return 'Streech'

    }

    
}

let violin = new Violin('Violin',4)
console.log(violin.play());