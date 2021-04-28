'use strict';

export class Plant {
    private _waterlevel:number;
    private _criticalWaterLevel: number;
    private _absortionRate: number;
    private _color: string;
    private _plantType: string;

    constructor(critcalWaterLevel:number,absortionRate:number,color:string,plantType:string) {
        this._criticalWaterLevel=critcalWaterLevel;
        this._absortionRate=absortionRate;
        this._color=color;
        this._plantType=plantType;
         this._waterlevel =0;

    }

    public needsWatering(): boolean {
        return this._waterlevel < this._criticalWaterLevel;

    }

    public watering(waterAmount: number): void {
        this._waterlevel+=waterAmount * this._absortionRate;
        
    }
 
}