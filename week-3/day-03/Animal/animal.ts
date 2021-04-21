'use strict'
export{}


/*
Animal

    Create an Animal class
        Every animal has a hunger value, which is a whole number
        Every animal has a thirst value, which is a whole number
        When creating a new animal instance these values must be set to the default 50 value
        Every animal can eat() which decreases its hunger by one
        Every animal can drink() which decreases its thirst by one
        Every animal can play() which increases both its hunger and thirst by one
*/


class Animal {
    private hunger : number
    private thirst : number

    constructor(hunger:number, thirst: number){
        this.hunger = hunger,
        this.thirst = thirst
    }

    
  public eat(): void {
    this.hunger--;
  }

  public drink(): void {
      this.thirst--;
  }
  public play(): void {
      this.hunger++;
      this.thirst++;
  }
}

let Lion = new Animal(50,50)
let Tiger = new Animal(50,50)
let Wolf = new Animal(50,50)

Lion.play();
Tiger.eat();
Wolf.drink();


console.log(Lion,'Lion');
console.log(Tiger,'Tiger');
console.log(Wolf,'Wolf');