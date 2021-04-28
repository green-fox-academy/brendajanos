'use strict';


import {StringedInstrument} from './StringedInstrument'

class BassGuitar extends StringedInstrument {

    

    public sound():string{
        return 'Dumm dumm dumm'

    }

    
}

let bassguitar = new BassGuitar('Bassguitar',4);