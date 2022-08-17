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
//     }
// }
// interface IGetUserKey{
//     user1: IUser
// }
//
// class User {
//     public user1:IUser
//
//     constructor(user1:IUser) {
//         this.user1 = user1
//     }
//     public getUserKey(user1:IUser):any {
//         const getUserKeys:any = []
//         for (let key in user1){
//             // getUserKey.push(key)
//         }
//         if(typeof user1 === 'object'){
//             getUserKey (user1[key])
//         }
//         return getUserKeys
//     }
//
// }
// const li = new User(user1)
// console.log(li.getUserKey(user1))
