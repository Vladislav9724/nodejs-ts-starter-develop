export interface ICar {
    drive() : string
    brake() : string
    turn(where:string) : string

}

  export class Car implements ICar{
    public brand: string
    public age: number

    constructor(brand: string, age:number) {
        this.brand = brand
        this.age = age
    }

    public drive (): string {
        const getDrive = `${this.brand}, age ${this.age} - start`
        return getDrive
    }
    public brake (): string{
        const getBrake = `${this.brand} - STOP!`

        return getBrake
    }
    public turn (where: string ): string{
        const getTurn = `${this.brand}, age ${this.age} - turn ${where}`
        return getTurn
    }

}

 const tesla = new Car(`Tesla`, 7)


console.log(tesla)