// // let str = "Hello!"
// // let num = 1.2345
// // console.log(str.toLowerCase())//hello
// // console.log(str.toUpperCase())//HELLO
// // console.log(num.toFixed(2))//1.23
//
//
// //                                                    Числа
//
// let billion = 1000000000
// console.log(billion)
// let billion1 = 1e9
// console.log(billion1)
// console.log(7.3e9)
// console.log(0xff)
//
// let num = 255
// console.log(num.toString(16))
// console.log(num.toString(2))
// console.log(num.toString(10))

// console.log(Math.floor(3.1))
// console.log(Math.floor(3.6)) // округляет в меншую сторону
//
// console.log(Math.ceil(3.1))
// console.log(Math.ceil(3.6)) // округляет в большую сторону
//
// console.log(Math.round(3.1))
// console.log(Math.round(3.6)) // округ по правідам матем
//
// let num = 1.234567
// //
// // console.log(Math.floor(num * 100) / 100)
// // console.log(num.toFixed(2))
// // console.log(isNaN(NaN))
// // console.log(isNaN(num))
// // console.log(+'100px')
// // console.log(parseInt('100px'))
// // console.log(parseFloat('100.234px'))
//
// console.log(Math.round(Math.random() * 100))
// console.log(Math.pow(2,10))
// console.log(2**10)
//
// let c = 5
// let b = 7
//
// console.log(c + b)
//
//
// console.log(6.35.toFixed(1))
// console.log(6.35.toFixed(20))
// console.log(Math.round(6.35 * 10) / 10)


//                                            СТРОКИ


import {log} from "util";

// function sum (x:number, y:number):number{
//     return x + y;
// }
//
// console.log(`1 + 2 = ${sum(1, 2)}`)
//
//
// let guestList = "Guest:\n  1 John\n  2 Pete\n  3 Mary"
// console.log(guestList)
//
//
// console.log("\u00A9")
// console.log("\u{1F60D}")

// console.log('I\'m the Walrus'. length)
// let str = 'Hello!'
// console.log(str[200])
// // console.log(str[str.length - 1])
// console.log(str.charAt(2000))

// for(let char of 'Hello'){
//     console.log(char)
// }
//
// let str = 'Hi'
// str = 'h' + str[1]
// console.log(str)

//
// let str = 'Hello! am is Vlad'
// console.log(str.includes('Hello'))
// console.log(str.includes('Help'))
//
// let str = "stringify"
// console.log(str.slice(2))
//
// console.log('z'.codePointAt(0))
// console.log('Z'.codePointAt(0))
// console.log(String.fromCodePoint(90))
//
// let str =''
// for (let i = 1; i <= 220; i++ ){
//     str +=String.fromCodePoint(i)
// }
//
// console.log(str)


//                            МАСИВИ

// let arr = ['Appel', 'Sliva', 'Leman']
//
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }
//
// for (let fruits of arr){
//     console.log(fruits)
// }
//
// for (let fruits in arr){
//     console.log(arr[fruits])
// // }
// //
// //
// // for (let fruits in arr){
// // //     console.log(fruits)
// // // }
// //
// // ['Ivan', 'Roma', 'Anna'].forEach((item,index,arrey) => {
// //     console.log(`${item} має позицію ${index} v ${arrey}`);
// // })
// //
// //
// // let leng = ['Ivan', 'Roman', 'Anstasiy'].map(item => item.length)
// // console.log(leng)
// // // let lengs = [2, 25, 15,17,32]
// // // lengs.sort()
// // // console.log(lengs)
// //
// function arr (a:number, b:number): number{
//     if(a > b) return 1;
//     if(a == b) return 0;
//     return -1;
// }
// let array = [1,2,5,8,15,17,28,22,45,17]
// array.sort(arr);
// console.log(array);
// //
// //
// // [1,2,5,,15,17,28,22,45,17].sort(function (a:any,b:any):any{
// //     console.log(a + '<>' + b)
// // })
//
// // let names = 'Ivan, Roman, Anstasiy';
// // let arr = names.split(', ');
// // for (let name of arr){
// //     console.log(`CSC`)
// // }

//

//
// for(let cher of 'text'){
//     console.log(cher)
// }


// let map = new Map()
// map.set('1', 'str1')
// map.set(1, 'num1')
// map.set(true, 'bool1')
//
// console.log(map.get('1'))
// console.log(map.get(1))
// console.log(map.get(true))
//
// console.log(map.size)
//
// let john = {name: 'John'}
// let visitsCountMap = new Map
//
// visitsCountMap.set(john, 123)
//
// console.log(visitsCountMap.get(john))
//
// let recipeMap = new Map([
//     ['ogurets', 500],
//     ['pomiodr', 350],
//     ['luk', 59]
// ])
//
// for(let vegetable of recipeMap.keys()){
//     console.log(vegetable)
// }
//
//
// for(let amount of recipeMap.values()){
//     console.log(amount)
// }
//
// for(let entry of recipeMap){
//     console.log(entry)
// }
//
// let obj = {
//     name: 'Ivah',
//     age: 45,
// }
//
// let map1 = new Map(Object.entries(obj))
// console.log(map.get('name'))
//
// let prices = Object.fromEntries([
// //     ['banana', 1],
// //     ['orange', 2],
// //     ['meat', 3],
// // ])
// //
// // console.log(prices.orange)
// //
//
// let map = new Map()
//
// map.set('banana', 1)
// map.set('orange', 2)
// map.set('maet', 4)
//
// let obj = Object.fromEntries(map.entries())
//
// console.log(obj.orange)
//
// let set = new Set
//
// let john = {name: 'johm'}
// let pete = {name:'Pete'}
// let mary = {name: 'Mapy'}
//
// set.add(john)
// set.add(pete)
// set.add(mary)
// set.add(john)
// set.add(mary)
//
// console.log(set.size)
//
// for(let user of set){
//     console.log(user)
// }
//
//
// let john = {name: 'John'}
// let map = new Map()
// map.set(john, '...')
//
// //
// // john = null
//
// //
//
// let visitsCountMap = new Map()
//
// function countUser (user:any){
//     let cont = visitsCountMap.get(user) || 0
//     visitsCountMap.set(user, cont + 1)
// }
//
// // console.log(countUser(4))
//
// let visitsSet = new Set
//
// let john = {name: 'johm'}
// let pete = {name:'Pete'}
// let mary = {name: 'Mapy'}
//
// visitsSet.add(john)
// visitsSet.add(pete)
// visitsSet.add(john)
//
// // console.log(visitsSet.has(john))
// // console.log(visitsSet.has(mary))
//
//
// let user = {
//     name: 'Ivan',
//     age: 36,
// }
//
// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))
// for (let value of Object.values(user)){
//     console.log(value)
// }
//
// let prices = {
//     banana: 1,
//     orange: 2,
//     meat: 4
// }
//
// let doublePrices = Object.fromEntries(
//     Object.entries(prices).map(([key, value]) => [key, value * 2])
// )
//
// console.log(doublePrices.meat)

// let arr = ['Ivan', 'Romanov']
// let [firsnName, surName] = ''
//
// console.log(firsnName)
// console.log(sur




//
// let Jan01_1970 = new Date(24 * 3600 * 1000)
//
//
// // console.log(Jan01_1970)
//
// // const user9 =['Ivan', 'Roman', 'Oleg']
// // // let arr = user9.map(item => item.toUpperCase())
// // // console.log(arr)
// //
// // const user11 = user9.forEach(console.log)
//
//
// let map = new Map()
//
// map.set ('1','str1')
// map.set(1, 'num1')
// map.set(true, 'boolt')
//
// console.log(map.get('1'))
// console.log(map.get(1))
// console.log(map.get(true))
// console.log(map.size)
//
//
// let recipeMap = new Map([
//     ['ogurets', 500],
//     ['pomidir', 300],
//     ['luc', 200]
// ])
//
// for(let key of recipeMap.keys()){
//     console.log(key)
// }
//
// for(let value of recipeMap.values()){
//     console.log(value)
// }
//
// for(let entr of recipeMap.entries()){
//     console.log(entr)
// }
//
// recipeMap.forEach((value, key, map) => console.log(key, value))
//  let obj = {
//     name: 'John',
//     age: 34
//  }
// let map2 = new Map(Object.entries(obj))
// console.log(map2.get('name'))
//
// let prices = Object.fromEntries([
//     ['banana', 1],
//     ['orenge', 2],
//     ['meat', 4]
// ])
//
// console.log(prices.orenge)
//
// let map3 = new Map ()
// map3.set('banana', 1)
// map3.set('orenge', 2)
// map3.set('meat', 4)
// let obj1 = Object.fromEntries(map3.entries())
// console.log(obj1)
//
// let set = new Set()
//
// let john = {name: 'John'}
// let max = {name: 'Max'}
// let oleg = {name: 'Oleg'}
//
// set.add(john)
// set.add(oleg)
// set.add(john)
// set.add(max)
// set.add(john)
// set.add(john)
//
// console.log(set.size)
//
// // for(let user of set){
// //     console.log(user.name)
// // }
// set.forEach((value, value2, set) => {
//     console.log(set)
// })
//
// function unique(arr:any):any {
//     return Array.from(new Set(arr))
//
// }
//
// let values: any = ['Here', 'Krishna', 'Here', 'Krishna', 'Krishna', 'Krishna', "Here", "Here", '0']
// console.log(unique(values))
//
//
// const user7 = {
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

//
// // const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // const newArray:any = []
// //
// // array.forEach((element) => {
// //    newArray.push(element += element)
// // })
// // console.log(newArray)
//
// interface IUser {
//     name: string,
//     age: number
// }
//  const user1 = {
//    name: 'Ivan',
//    age: 23
//  }
//  const user2 = {
//    name: 'Oleg',
//    age: 32
//  }
//  const user3 = {
//    name: 'Roman',
//    age: 15
//  }
//
//  const users =[user1, user2, user3]
// const wm1 = new WeakMap()
//  wm1.set(user1, user1.name)
// console.log(wm1.get(users))