
abstract class Car {
    constructor(
        protected owner: string,
        protected speed: number,
        protected year: number

    ) { }

    public diver(){}
    public repair (){}
}

 class BMW extends Car {

    constructor(
        protected speed: number,
        protected year: number,
    ) {
        super('BMW compani', speed, year );
    }

    diver() {
        console.log(`The BMW car has speed ${this.speed} speed`)
    }

     repair() {
         console.log(`The BMW car was repaired`)
     }

 }

 const bmwCar = new BMW(200, 2020)
bmwCar.diver()
bmwCar.repair()
