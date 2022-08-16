import {log} from "util";


// interface IUser{
//     userId: number,
//     name: string,
//     city: string,
//     age: number,
//     address?: IAddress,
//     photo?:{
//         url: string
//     }
// }
// interface IAddress {
//     street: string,
//     house: number,
//     apartment: number
// }
//
//
// const user1 = {
//     userId: 1,
//     name: 'Vova',
//     city: 'Lviv',
//     age: 26,
//     address: {
//         street: 'Lvivska',
//         house: 20,
//         apartment: 91,
//     },
//     photo: {
//         url: 'https://i.pravatar.cc/300',
//     }
// }
//
// const user2 = {
//     userId: 2,
//     name: 'Kesha',
//     city: 'Kyiv',
//     age: 30,
// }
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
// const users = [user1, user2, user3]
// const numbers =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 4, 5, 6, 7, 8, 9, 10]
//
// // const getUserName = function (array: IUser[]): string[] {
// //     const userName = users.map(user => user.name.toUpperCase())
// //     return userName
// // }
// // console.log(getUserName(users))
// //
// const getUserName1 = function (array:IUser[]): string[] {
//     const getName1: string[] = []
//     array.forEach((user) => {
//         getName1.push(user.name.toUpperCase())
//     })
//     return getName1
//
// }
//
// console.log(getUserName1(users))

// const getUserName2 = function (array:IUser[]): IAddress[] {
//     const getAddress1: IAddress[] = []
//     array.forEach((user:IUser) => {
//         if(user.address){
//             getAddress1.push(user.address)
//         }
// })
//     return getAddress1
// }
// console.log(getUserName2(users))

// const mapUser1 = new Map(Object.entries(user1))
// console.log(mapUser1)

// // const mapUsers = function (users:IUser[]): object {
// //     const result = new Map()
// //     users.forEach((user:IUser) => {
// //         result.set(user.age , user)
// //     } )
// //     return result
// // }
// //
// // console.log(mapUsers(users))
// //
// function mapUsers (users:IUser[]): object {
//     const result = new Map()
//     users.forEach((user:IUser) => {
//         if(user.address){
//             result.set(user.city, user.address)
//         }
//
//     })
//     return result
//
// }
//
// console.log(mapUsers(users))
//
// function mapUsers1 (users:IUser[]): object {
//     const result = new Map()
//     users.forEach((user:IUser) => {
//         if(user.address){
//             result.set(user.address.house, user)
//         }
//
//     })
//     return result
//
// }
//
// console.log(mapUsers1(users))

// function getNum (numbers: number[]): object {
//     const setNum = new Set()
//     numbers.forEach((number) => {
//         setNum.add(number)
//     } )
//     return setNum
//
// }
//
// console.log(getNum(numbers))


// //                        task  5
// const setNum1 = new Set(numbers)
// console.log(setNum1)
//
//
// //                        task  6
// const mapUser1_obj = new Map(Object.entries(user1))
// console.log(mapUser1_obj)


//                        task  7
// const getWekMap = function (users:IUser[]): object {
//     const wekMap = new WeakMap()
//     users.forEach((user:IUser) => {
//         if(user.address){
//             wekMap.set(user.address, user)
//         }
//
//     })
//     return wekMap
// }
// const result = getWekMap(users)
//
// function output (wekMap: any) {
//     wekMap.forEach((item: any) => {
//         console.log(item)
//     })
//
// }
// output(result)



//                        task  8,
// function key (user3: IUser){
//     for (let key in user3) {
//         console.log(key)
//     }
//     for (let add in user3.address){
//         console.log(add)
//     }
// }
// key(user3)

console.log(Object.keys(user3))
console.log(Object.values(user3))


// //               более правильний вариант
const showKeys = (obj:any) => {
    for (let key in obj) {
        if (typeof(obj[key]) === 'object')
        {
            showKeys(obj[key]);
        }
        else
        {
            console.log(`Keys: ${key}`);

        }
    }
}

showKeys(user3);
//
// //                             task 9
//
//
// const showValues = (obj:any) => {
//     for (let key in obj) {
//         if (typeof(obj[key]) === 'object')
//         {
//             showValues(obj[key]);            // рекурсия!!!
//         }
//         else
//         {
//             console.log(`Values: ${obj[key]}`);
//         }
//     }
// }
//
// showValues(user3);

//
//
// //                             11
//
// const data = new Date()
// console.log(data)
//
//
//
// //                             12
//
//
// const json = JSON.stringify(user1)
// console.log(json)
// const obj = JSON.parse(json)
// console.log(obj)