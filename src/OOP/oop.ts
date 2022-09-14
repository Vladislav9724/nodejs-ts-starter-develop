//
// class Developer {
//
//     constructor(
//         public name: string,
//         protected salary: number
//     ) { }
//
//     getInfo (){
//         console.log('name', this.name)
//         console.log('salary', this.salary)
//
//     }
// }
// class SeniorDev extends Developer {
//     constructor(
//         public name: string,
//         protected salary: number
//     ) {
//         super (name, salary)
//     }
//     teachJuniorDevs():void{
//         console.log(`${this.name}`)
//     }
//
// }
// const developer1 = new SeniorDev('Vlad', 1000)
// console.log(developer1.getInfo())
// developer1.teachJuniorDevs()
//

// const fs = require('fs')
// const path = require('path')
//
// // fs.mkdir(path.join(__dirname, 'test'), (err:any) => {
// //     if (err){
// //         throw err
// //     }
// //     console.log("ok")
// // })
//
// const filePath = path.join(__dirname, 'test', 'test.txt')
// // fs.writeFile(filePath, 'Vlad Nodejs', (err:any) => {
// //     if(err){
// //         throw err
// //     }
// //     console.log(' ok')
// // })
//
// fs.readFile(filePath, 'utf-8', (err:any, content:any) => {
//     if(err){
//         throw err
//     }
//     console.log(content)
//     // const data = Buffer.from(content)
//     // console.log('Content:', data.toString())
// })


// const uuid = require('uuid')
//
// console.log(uuid.v1())
// console.log(uuid.v4())

// class Rectangle {
//     private _width: number
//     private _heigth: number
//
//     constructor(w: number, h: number) {
//         this._heigth = h
//         this._width = w
//     }
//     get _width (value){
//         return this._width
//     }
//     set
//
//     calcArea(){
//         return (this._width * this._heigth) * 2
//     }
// }
//
// const rect = new Rectangle(5, 7)
// console.log(rect.calcArea())



// class  User{
//     private _username:string
//     private _password:number
//     private _id: number
//
//     constructor(username: string, password: number) {
//         this._username = username
//         this._password = password
//         this._id = require('uuid')
//     }
//
//
//     get username(): string {
//         return this._username;
//     }
//
//     set username(value: string) {
//         this._username = value;
//     }
//
//     get password(): number {
//         return this._password;
//     }
//
//     set password(value: number) {
//         this._password = value;
//     }
//
//     get id(): number {
//         return this._id;
//     }
//
// }
//
// const user = new User('Vlad', 1234)
//
// console.log(user)
// console.log()

// class Database {
//     private _url: string
//     private _port: number
//     private _username: string
//     private _password: number
//     private _tables: any
//
//     constructor(url:string, port: number, username: string, password: number) {
//         this._url = url
//         this._port = port
//         this._username = username
//         this._password = password
//         this._tables = []
//     }
//     public creatNewTables(_tables:any){
//         this._tables.push(_tables)
//     }
//
//
//     get url(): string {
//         return this._url;
//     }
//
//     get port(): number {
//         return this._port;
//     }
//
//     get username(): string {
//         return this._username;
//     }
//
//     get password(): number {
//         return this._password;
//     }
//
//     get tables() {
//         return this._tables;
//     }
// }
//
// const dp = new Database('1', 2, 'Vlad', 4)
// dp.creatNewTables({name:'Vova'})
// dp.creatNewTables({name:'users'})
// console.log(dp)

// class Person {
//
//
//     constructor(
//        private firstName: string,
//        private lastName: string,
//        private age: number
//        ) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//     }
//
//     public greeting(){
//         console.log(`Привіт я людина мене звоти ${this.firstName}` )
//     }
//
//     public get fullName(){
//         return `Фамілія - ${this.lastName}, Ім'я - ${this.firstName}, ${this.age}`
//     }
//
// }
// const person = new Person('Vlad', 'Tsyapka', 25)
// person.greeting()

