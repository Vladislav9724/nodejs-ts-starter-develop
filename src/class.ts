import {generateKey} from "crypto";

interface IUser {
    userId: number,
    name: string,
    city: string,
    age: number

}

class User implements IUser{
    public userId: number
    public name: string
    public city: string
    public age: number

    constructor(userId: number, name: string, city: string, age: number) {
        this.age = age
        this.name = name
        this.city = city
        this.userId = userId
    }
    getUserKey (User:any):any {
        const userKey: any = Object.keys(li)
        return userKey
    }


}

const li = new User(15, 'Ivan', 'Dnipro', 56)
console.log(li.getUserKey(User))



//
//
// console.log(getUserKey(user3))

// }



// interface  IUser{
//     userId: number,
//         name: string,
//         city: string,
//         age: number,
//         address: IAddress
// }
// interface IAddress {
//     street: string,
//     house: number,
//     apartment: number
// }
//
// class User3 implements IUser {
//     public user_userId
//     public user_name
//     public user_city
//
//
//     constructor(
//         public userId: number,
//         public name: string,
//         public city: string,
//         public age: number
//     ) {
//         this.user_userId = userId
//         this.user_name = name
//         this.user_city = city
//         this.age = age
//     }
// }
//




//
//
// const user3 = {
//     userId: 3,
//     name: 'Vlad',
//     city: 'Dnipro',
//     age: 25,
//     address: {
//         street: 'Gagarina',
//         house: 57,
//         apartment: 315,
//     }
// }
//
// function getUserKey (user3: IUser): IUser[] {
//     const userKey:any = []
//     for (let key in user3 ){
//         userKey.push(key)
//     }
//     return userKey
//
// }
//
//
// console.log(getUserKey(user3))
//
//
//
// class  User {
//
//     static ageRestriction = 18
//
//     get fullName(): string {
//         return this.name + ' ' + max.surName
//     }
//     set fullName (fullName:string){
//         const [name, surName] = fullName.split('  ')
//         this.name = name
//         this.surName = surName
//     }
//
//         constructor(
//             private name:string,
//             private surName: string,
//             private age:number,
//             protected _isAdmin= false
//         ) {
//         if(this.age <= User.ageRestriction){
//             throw new Error('Age muts be than 18 years')
//         }
//         }
//
//     isAdman(): boolean{
//         return this._isAdmin
//     }
//
// }
// class Admin extends User{
//     protected _isAdmin:boolean = true
//
// }
//
// const max = new Admin('Max', 'Grom', 42)
// console.log(max)
// console.log(max.fullName)
// max.fullName = 'Maks Hrom'
// console.log(max)
//
// if (max.isAdman()){
//     console.log('Hello Admim ' + max.fullName)
// }



// interface Ix{
//     x:number
//     y:number
// }
//
// class Point implements Ix{
//     x: number
//     y:number
//
//     constructor(x=4, y =7) {
//         this.x = x
//         this.y = y
//     }
// }
// const pt = new Point()
//
// console.log(pt.x , pt.y)




// interface IHostel {
//     getHostelName(): string
// }
//
// class Hostel implements IHostel {
//     public hostel_name: string
//
//     constructor(public name: string) {
//         this.hostel_name = name
//     }
//
//     public getHostelName(): string {
//         return this.hostel_name
//     }
// }
//
// const hostel = new Hostel("NTU DP")
//
// console.log(hostel)
//
// class Car {
//     public brand:string
//     public color: string
//     constructor(brand:string, color:string) {
//         this.brand = brand
//         this.color = color
//     }
//     start(){
//         console.log(`${this.brand} - ${this.color} - start`)
//     }
//     stop(){
//         console.log(`${this.brand} - ${this.color} - STOP`)
//     }
//     static discaund(){
//         console.log('Skidcf 10%')
//     }
//
// }
//
// const tesla = new Car('Tesla', 'siver')
// const nisan = new Car('Nissan', 'red')
// console.log(tesla.stop())
// console.log(Car.discaund())
// console.log(nisan.stop)

// class Car {
//     public brand:string
//     public gasTant: number
//     public zapravka: []
//     constructor(brand:string) {
//         this.brand = brand
//         this.gasTant = 100
//         this.zapravka = []
//     }
//     getGas() {
//         this.gasTant += 10
//         const stemp = Date.now()
//         const time = new Date(stemp)
//         this.zapravka.push(time.toString())
//         return this.gasTant
//
//     }
//     drive(){
//         this.gasTant-=10
//         return this.gasTant
//     }
// }
// const nissan = new Car('Nissan')
// console.log(nissan)
// console.log(nissan.drive())
// console.log(nissan.drive())
// console.log(nissan.drive())
// console.log(nissan.getGas())
// console.log(nissan.getGas())
// console.log(nissan)



// class User {
//     public name: string
//
//     constructor(name: string) {
//         this.name = name
//     }
//     sayHello() {
//         console.log(this.name + 'Hello')
//     }
// }
// const alex = new User('Alex')
// console.log(alex)
//
// class Person extends User{
//     public email: string
//     constructor(name:string, email:string) {
//         super(name)
//         this.name = name
//         this.email = email
//     }
// }
//
// const li = new Person('Li', 'ililili')
// console.log(Object.keys(li))
// console.log(Object.values(li))