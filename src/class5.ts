// interface IUser {
//     userId: number,
//     name: string,
//     city: string,
//     age: number,
//     address?: IAddress,
// }
//
// interface IAddress {
//     street: string,
//     house: number,
//     apartment: number
// }
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
// class User implements IGetUserKey {
//     public user: any
//
//     constructor(user: IUser) {
//         this.user = user
//     }
//
//     public getUserKey(): string[] {
//         const getUserKey: string[] = []
//         for (let value in this.user) {
//             if (typeof (this.user[value]) !== "object"){
//                 getUserKey.push(this.user[value])
//             }
//
//             if(typeof (this.user[value]) === "object"){
//                 for (let velIf in this.user[value]){
//                     getUserKey.push(this.user[value][velIf])
//                 //    this.user.address.strit = this.user[vel][velIf]
//                 }
//             }
//
//         }
//         return getUserKey
//     }
//
// }
//
// const li = new User(user)
// console.log(li.getUserKey())
// console.log(li.getUserKey().length)
