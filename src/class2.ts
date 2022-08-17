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
// const user = {
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
//     getUserKey(): string[]
//     user:IUser
// }
//
// class User implements IGetUserKey {
//     public user: IUser
//
//     constructor(user: IUser) {
//         this.user = user
//     }
//
//     public getUserKey(): string[] {
//         const getUserKey: string[] = []
//         for (let key in this.user) {
//             getUserKey.push(key)
//
//         }
//         return getUserKey
//     }
//
// }
//
// const li = new User(user)
// console.log(li.getUserKey())