'use strict'
export {}

/*Sharpie

    Create a Sharpie class
        We should know the followings about each sharpie:
            color (which should be a string),           
            width (which will be a floating point number) and the     ==> parseFloat()
            inkAmount (another floating point number)
        We need to specify the color and the width at creation
        Every sharpie is created with a default inkAmount value: 100
        We can use() the sharpie objects: using it decreases inkAmount by 10
*/


export class Sharpie {
    color : string
    width : number
    inkAmount : number
    
    constructor(color:string,width:number,inkAmount:number){
        this.color= color,
        this.width= width,
        this.inkAmount= inkAmount
    }
    
    public decrease(): number {
       return  this.inkAmount-=10;
      }

      public getColor(){
        return this.color;
    };
}

let Blue = new Sharpie('blue',12,100)
let Green = new Sharpie('green',11,100)
let Red = new Sharpie('red',12,100)

Red.decrease();
Green.decrease();

console.log(Blue);
console.log(Green);
console.log(Red);

