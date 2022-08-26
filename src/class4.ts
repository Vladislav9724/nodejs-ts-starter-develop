// interface IUser {
//     userId: number,
//     name: string,
//     city: string,
//     age: number,
//     address?: IAddress,
//
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
//     user: IUser
// }
//
// class User5 implements IGetUserKey {
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
//
//             if(typeof (this.user[key]) === "object"){
//
//                 for (let keyIf in this.user[key] ){
//                     getUserKey.push(keyIf)
//                 }
//             }
//
//         }
//         return getUserKey
//     }
//
// }
//
// const li1 = new User5(user)
// console.log(li1.getUserKey())
// console.log(li1.getUserKey().length)
