
class Animal {
    constructor(
        public name: string
    ) {}

    run(): void {}
}

class Dog extends Animal{
    constructor(public name: string) {
        super(name);
    }

    run(){
        console.log('Бегаю віляя хвостом')
    }

}

class Lion extends Animal{
    constructor(public name: string) {
        super(name);
    }

    run(){
        console.log('Бегаю хватаю добичу')
    }
}

const get = new Lion('lev')
console.log(get.name)