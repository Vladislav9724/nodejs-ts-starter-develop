import {log} from "util";


interface IUser{
    userId: number,
    name: string,
    city: string,
    age: number,
    address?: IAddress,
    photo?:{
        url: string
    }
}
interface IAddress {
    street: string,
    house: number,
    apartment: number
}


const user1 = {
    userId: 1,
    name: 'Vova',
    city: 'Lviv',
    age: 26,
    address: {
        street: 'Lvivska',
        house: 20,
        apartment: 91,
    },
    photo: {
        url: 'https://i.pravatar.cc/300',
    }
}

const user2 = {
    userId: 2,
    name: 'Kesha',
    city: 'Kyiv',
    age: 30,
}

const user3 = {
    userId: 3,
    name: 'Vlad',
    city: 'Dnipro',
    age: 25,
    address: {
        street: 'Gagarina',
        house: 57,
        apartment: 315,
    }
}

const users = [user1, user2, user3]
const numbers =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 4, 5, 6, 7, 8, 9, 10]

// const getUserName = function (array: IUser[]): string[] {
//     const userName = users.map(user => user.name.toUpperCase())
//     return userName
// }
// console.log(getUserName(users))
//
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

// const mapUsers = function (users:IUser[]): object {
//     const result = new Map()
//     users.forEach((user:IUser) => {
//         result.set(user.age , user)
//     } )
//     return result
// }
//
// console.log(mapUsers(users))
//
function mapUsers (users:IUser[]): object {
    const result = new Map()
    users.forEach((user:IUser) => {
        if(user.address){
            result.set(user.city, user.address)
        }

    })
    return result

}

console.log(mapUsers(users))

function mapUsers1 (users:IUser[]): object {
    const result = new Map()
    users.forEach((user:IUser) => {
        if(user.address){
            result.set(user.address.house, user)
        }

    })
    return result

}

console.log(mapUsers1(users))