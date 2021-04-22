import {Car} from './car'

export default class Station {
    private gasAmount : number
    
    constructor () {
        this.gasAmount = 10000
    }


    public refill(car: Car) {
        this.gasAmount -= car.capacity
        car.gasAmount += car.capacity
    }

}

