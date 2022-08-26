// interface IUser {
//     userId: number,
//     name: string,
//     city: string,
//     age: number,
//     address?: IAddress,
//     photo?: {
//         url: string
//     }
// }
//
// interface IAddress {
//     street: string,
//     house: number,
//     apartment: number
// }
//
//
// const userkey = {
//     userId: 1,
//     name: 'Vova',
//     city: 'Lviv',
//     age: 26,
//     address: {
//         street: 'Lvivska',
//         house: 20,
//         apartment: 91,
//     }
// }
//
// interface IGetUserKey {
//     getKey(
//         userkey: IUser
//     ): string[]
//
// }
//
// class UserKey implements IGetUserKey {
//
//     public getKey(userkey: IUser): string[] {
//         const getUserKey1: string[] = []
//         for (let key in userkey) {
//             getUserKey1.push(key)
//
//         }
//         return getUserKey1
//     }
//
// }
//
// const li = new UserKey()
// console.log(li.getKey(userkey))
