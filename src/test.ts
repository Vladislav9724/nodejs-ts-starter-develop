import {log} from "util";


interface IUser{
    userId: number,
    name: string,
    city: string,
    age: number,
    address?: {
        street: string,
        house: number,
        apartment: number
    }
    photo?:{
        url: string
    }
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
//
// const getUserName = function (array: IUser[]): string[] {
//     const userName = users.map(user => user.name.toUpperCase())
//     return userName
// }
// console.log(getUserName(users))

const getUserName = function (array:IUser[]): string[] {
    const getName: string[] = []
    users.forEach((user) => {
        getName.push(user.name.toUpperCase())
    })
    return getName

}

console.log(getUserName(users))