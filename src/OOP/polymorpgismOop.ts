
class Animal {
    constructor(
        public name: string,
        public age: number
    ) {
        this.name = name
        this.age = age
    }

    makeSound(){
        return 'Some nice sound made'
    }
}

class Dog extends Animal{
    constructor(
        public name: string,
        public age: number,
        public breed: string
    ) {
        super(name, age);
        this.breed = breed
    }

    makeSound() {
        return 'woof';
    }

}

class Gat extends Animal{
    constructor(
        public name: string,
        public age: number,
        public weight: string
    ) {
        super(name, age)
        this.weight = weight
    }

   // makeSound() {
   //     return 'meow';
   // }
}

const myDog = new Dog('Rex', 4, 'German Sh.')
const myGat = new Gat('Pushok', 3, '5 kg')
console.log(myDog.makeSound())
console.log(myGat.makeSound())