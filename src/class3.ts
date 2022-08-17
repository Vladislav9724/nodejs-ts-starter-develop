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
//     getUserKey(
//         user: IUser
//     ): string[]
//
// }
//
// class User implements IGetUserKey {
//
//     public getUserKey(user: IUser): string[] {
//         const getUserKey: string[] = []
//         for (let key in user) {
//             getUserKey.push(key)
//
//         }
//         return getUserKey
//     }
//
// }
//
// const li = new User()
// console.log(li.getUserKey(user))
