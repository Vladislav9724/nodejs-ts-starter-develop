// // // import {log} from "util";
// // //
// // //
// // // // interface IUser{
// // // //     userId: number,
// // // //     name: string,
// // // //     city: string,
// // // //     age: number,
// // // //     address?: IAddress,
// // // //     photo?:{
// // // //         url: string
// // // //     }
// // // // }
// // // // interface IAddress {
// // // //     street: string,
// // // //     house: number,
// // // //     apartment: number
// // // // }
// // // //
// // // //
// // // // const user1 = {
// // // //     userId: 1,
// // // //     name: 'Vova',
// // // //     city: 'Lviv',
// // // //     age: 26,
// // // //     address: {
// // // //         street: 'Lvivska',
// // // //         house: 20,
// // // //         apartment: 91,
// // // //     },
// // // //     photo: {
// // // //         url: 'https://i.pravatar.cc/300',
// // // //     }
// // // // }
// // // //
// // // // const user2 = {
// // // //     userId: 2,
// // // //     name: 'Kesha',
// // // //     city: 'Kyiv',
// // // //     age: 30,
// // // // }
// // // //
// // // // const user3 = {
// // // //     userId: 3,
// // // //     name: 'Vlad',
// // // //     city: 'Dnipro',
// // // //     age: 25,
// // // //     address: {
// // // //         street: 'Gagarina',
// // // //         house: 57,
// // // //         apartment: 315,
// // // //     }
// // // // }
// // // //
// // // // const users = [user1, user2, user3]
// // // // const numbers =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 4, 5, 6, 7, 8, 9, 10]
// // // //
// // // // // const getUserName = function (array: IUser[]): string[] {
// // // // //     const userName = users.map(user => user.name.toUpperCase())
// // // // //     return userName
// // // // // }
// // // // // console.log(getUserName(users))
// // // // //
// // // // const getUserName1 = function (array:IUser[]): string[] {
// // // //     const getName1: string[] = []
// // // //     array.forEach((user) => {
// // // //         getName1.push(user.name.toUpperCase())
// // // //     })
// // // //     return getName1
// // // //
// // // // }
// // // //
// // // // console.log(getUserName1(users))
// // //
// // // // const getUserName2 = function (array:IUser[]): IAddress[] {
// // // //     const getAddress1: IAddress[] = []
// // // //     array.forEach((user:IUser) => {
// // // //         if(user.address){
// // // //             getAddress1.push(user.address)
// // // //         }
// // // // })
// // // //     return getAddress1
// // // // }
// // // // console.log(getUserName2(users))
// // //
// // // // const mapUser1 = new Map(Object.entries(user1))
// // // // console.log(mapUser1)
// // //
// // // // // const mapUsers = function (users:IUser[]): object {
// // // // //     const result = new Map()
// // // // //     users.forEach((user:IUser) => {
// // // // //         result.set(user.age , user)
// // // // //     } )
// // // // //     return result
// // // // // }
// // // // //
// // // // // console.log(mapUsers(users))
// // // // //
// // // // function mapUsers (users:IUser[]): object {
// // // //     const result = new Map()
// // // //     users.forEach((user:IUser) => {
// // // //         if(user.address){
// // // //             result.set(user.city, user.address)
// // // //         }
// // // //
// // // //     })
// // // //     return result
// // // //
// // // // }
// // // //
// // // // console.log(mapUsers(users))
// // // //
// // // // function mapUsers1 (users:IUser[]): object {
// // // //     const result = new Map()
// // // //     users.forEach((user:IUser) => {
// // // //         if(user.address){
// // // //             result.set(user.address.house, user)
// // // //         }
// // // //
// // // //     })
// // // //     return result
// // // //
// // // // }
// // // //
// // // // console.log(mapUsers1(users))
// // //
// // // // function getNum (numbers: number[]): object {
// // // //     const setNum = new Set()
// // // //     numbers.forEach((number) => {
// // // //         setNum.add(number)
// // // //     } )
// // // //     return setNum
// // // //
// // // // }
// // // //
// // // // console.log(getNum(numbers))
// // //
// // //
// // // // //                        task  5
// // // // const setNum1 = new Set(numbers)
// // // // console.log(setNum1)
// // // //
// // // //
// // // // //                        task  6
// // // // const mapUser1_obj = new Map(Object.entries(user1))
// // // // console.log(mapUser1_obj)
// // //
// // //
// // // //                        task  7
// // // // const getWekMap = function (users:IUser[]): object {
// // // //     const wekMap = new WeakMap()
// // // //     users.forEach((user:IUser) => {
// // // //         if(user.address){
// // // //             wekMap.set(user.address, user)
// // // //         }
// // // //
// // // //     })
// // // //     return wekMap
// // // // }
// // // // const result = getWekMap(users)
// // // //
// // // // function output (wekMap: any) {
// // // //     wekMap.forEach((item: any) => {
// // // //         console.log(item)
// // // //     })
// // // //
// // // // }
// // // // output(result)
// // //
// // //
// // //
// // // //                        task  8,
// // // // function key (user3: IUser){
// // // //     for (let key in user3) {
// // // //         console.log(key)
// // // //     }
// // // //     for (let add in user3.address){
// // // //         console.log(add)
// // // //     }
// // // // }
// // // // key(user3)
// // // //
// // // // console.log(Object.keys(user3))
// // // // console.log(Object.values(user3))
// // // //
// // // //
// // // // // //               более правильний вариант
// // // // const showKeys = (obj:any) => {
// // // //     for (let key in obj) {
// // // //         if (typeof(obj[key]) === 'object')
// // // //         {
// // // //             showKeys(obj[key]);
// // // //         }
// // // //         else
// // // //         {
// // // //             console.log(`Keys: ${key}`);
// // // //
// // // //         }
// // // //     }
// // // // }
// // // //
// // // // showKeys(user3);
// // // //
// // // // //                             task 9
// // // //
// // // //
// // // // const showValues = (obj:any) => {
// // // //     for (let key in obj) {
// // // //         if (typeof(obj[key]) === 'object')
// // // //         {
// // // //             showValues(obj[key]);            // рекурсия!!!
// // // //         }
// // // //         else
// // // //         {
// // // //             console.log(`Values: ${obj[key]}`);
// // // //         }
// // // //     }
// // // // }
// // // //
// // // // showValues(user3);
// // //
// // // //
// // // //
// // // // //                             11
// // // //
// // // // const data = new Date()
// // // // console.log(data)
// // // //
// // // //
// // // //
// // // // //                             12
// // // //
// // // //
// // // // const json = JSON.stringify(user1)
// // // // console.log(json)
// // // // const obj = JSON.parse(json)
// // // // console.log(obj)
// // //
// // // interface IUs {
// // //     name: string,
// // //     age: number
// // // }
// // // const user5: any = {
// // //     name: 'Ivan',
// // //     age: 25
// // // }
// // //
// // // for(let vel in user5){
// // //     console.log(user5[vel])
// // // }
// //
// // // const myArr = [{id:1,name:'Ivan'},
// // //     {id:2,name:'Roma'},{id:3,name:'Oly'}]
// // //
// // // const newArr = myArr.filter((item) => item.id !== 1)
// // //
// // // console.log(newArr)
// //
// //
// // const myArr1 = [{name:'Ivan'}, {name: 'Roma'}, {name:'Oly'}]
// //
// // const myIndex1 = myArr1.indexOf({name:'Roma'})
// // if(myIndex1 === -1){
// //     myArr1.splice(myIndex1, 1)
// // }
// // console.log(myArr1)
// //
// //
// //
// // /*
// // const myArr = [{id:1,name:'Ivan'},
// //     {id:2,name:'Roma'},{id:3,name:'Oly'}]
// //
// // const myIndex = myArr.indexOf({id: 2, name: 'Roma'})
// // if(myIndex !== 0){
// //     myArr.splice(myIndex, 1)
// // }
// //
// // console.log(myArr)
// // */
// // const state =
// //     [{name:'name1'}, {name:'name2'}, {name:'name3'}]
// //
// //
// //
// //
// // const deletable = 'name3'
// //
// // state.filter((name:{name: string}) => String(name) !== deletable)
// // // console.log(state)
// // //
// // //
// //
// // const arr = [
// //     {name:'Black', value :'a'},
// //     {name:'Blue',value :'a'},
// //     {name:'Blonde',value :'b'},
// //     {name:'Alabaster', value :'b'},
// //     {name:'Red', value :'a'}
// // ];
// //
// //
// // let number = 1;
// // let newArr;
// //
// // if (number === 1) {
// //     newArr = arr.filter((item) => typeof(item) === 'object' && item.value !== 'a');
// //     console.log(newArr);
// // }
//
//
// const arr = [
//     {name:'Black', value :'a'},
//     {name:'Blue',value :'a'},
//     {name:'Blonde',value :'b'},
//     {name:'Alabaster', value :'b'},
//     {name:'Red', value :'a'}
// ];
//
// function cycle(arr: any[]) {
//     for (let i = 0; i < arr.length; i++) { // пройтись по все элементам массива
//         if (typeof(arr[i]) === 'object' && arr[i].value === 'b') { // если элемент массива является объектом, и у этого объекта поле value равняется 'b' и является строкой
//             arr.splice(i, 1); // удалить элемент из массива
//             i--; // уменьшить итератор на единицу
//         }
//     }
//     return arr; // вернуть массив как результат выполнения функции
// }
//
// let number = 1;
// let newArr;
//
// if (number === 1) { // если переменная number равняется 1 и является числом, то выполнять код
//     newArr = cycle(arr); // newArr равняется результату выполнения функции cycle
//     console.log(newArr);
// }
//
//
// let originalArrey = [{name: 'John', age: 15}, {name: 'Ann', age: 21}, {name: 'Mire', age: 13}]
// const myIndex = originalArrey.indexOf({name:'Ann', age: 21})
// if(myIndex !== -1){
//     originalArrey.splice(myIndex, 1)
//
// }
// console.log(originalArrey)
//
// const myArr = ['Anton', 'Ivan', 'Roman', 'Oleg']
// const index = myArr.indexOf('Roman')
// if (index !== -1){
//     myArr.splice(index,1)
// }
// console.log(myArr)


// class fi {
//     // @ts-ignore
//     public del (age: number){
//
//
//            let filterArreyu = originalArrey.filter(vel => vel.age !== age);
//
//
//         return filterArreyu
//     }
// }
//
// const ld = new fi()
// const sd = ld.del(13)
// console.log(sd)


// let filterArrey = originalArrey.filter(value => value.age === 13)
// console.log(filterArrey)



// const arr1 = [{id:'222'},{ id:'333'}, {id:'444'}, {id:'555'}]
// const arr2 = ['234','444', '323423425']
//
// arr1.forEach((item, i) => {
//     for (i = 0; i < arr2.length; i++){
//         if (item.id == arr2[i]){
//             arr1.splice(i,1)
//         }
//     }
// })
// console.log(arr1)

const arr = [1,2,3,4,5,6,7,8,9,]
 let i =  arr.indexOf(7)
if(i >=  0){
    arr.splice(i, 1)
}
console.log(arr)
