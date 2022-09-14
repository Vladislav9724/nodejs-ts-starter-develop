class  Human {
    constructor(public name: string) {
        this.name = name
    }
    say (){
        return `Hello, my name is ${this.name}, I like travelling`
    }
}
class Man extends Human{
    constructor(public name: string) {
        super(name);
    }
}

class Coder extends Human {
    constructor(public name: string) {
        super(name);
    }
    say (){
        return `Hello, my name is ${this.name}, I like coding`
    }
}

const alex = new Man('Alex')
const leo = new Coder('Leo')
const ivan = new Human('Roma')
console.log(alex.say())
console.log(leo.say())
console.log(ivan.say())