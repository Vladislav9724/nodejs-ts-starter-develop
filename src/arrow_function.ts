
// // // const ask = (question:string, yes: Iyes, no: Ino): string => {
// // //     if(question === "Я согласен."){
// // //         return yes(25)
// // //     }   return no()
// // // }

// // // interface Iyes {
// // //     (x: number):any
// // // }

// // // interface Ino {
// // //     (): string
// // // }
 
// // // const yes: Iyes = (x:number):any => {return x}
// // // const no: Ino  = ():string => {return "Вы отменили выполнение."}
// // // const question = "Я согласен."

// // // const res = ask (question, yes, no)

// // // console.log(`Res = ${res}`);
// // // console.log(typeof (res));

// interface IUser {
//     name: string
//     age: number
//     email: string
// }

// interface IUser_2 {
//     name: string
//     age: number
//     email: string
//     lastName:string
// }

// interface ImakeOlder {
//     (user: IUser): IUser_2
// }

// const makeOlder: ImakeOlder = (user: IUser):IUser_2 => {
//     return Object.assign({}, user, {age: user.age + 1}, {lastName: 'Tsiapka'})
//  }

// const user: IUser = {
// name: 'John',
// age: 17,
// email: 'jdjjfjfjfj@'
// }

// const olderUser = makeOlder(user)

// console.log(olderUser);


