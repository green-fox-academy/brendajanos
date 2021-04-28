'use strict';


import {StringedInstrument} from './StringedInstrument'

 class ElectricGuitar extends StringedInstrument {


    public sound():string {
       return 'Twang'

    }

}

let guitar = new ElectricGuitar('Guitar',6)
console.log(guitar.play())