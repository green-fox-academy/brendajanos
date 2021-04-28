'use strict'



export class Aircraft {

    private ammo: number ;
    private maxAmmo: number;
    private baseDamage: number; 


    constructor(maxAmmo: number,baseDamage: number){

        this.ammo = 0;
       this.baseDamage= baseDamage;
        this.maxAmmo= maxAmmo;
    
    }
    public fight(){
       let allDamage = this.baseDamage*this.ammo;
        this.ammo = 0;


    }

}