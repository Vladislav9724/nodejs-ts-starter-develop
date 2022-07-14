interface Iuser {
    name: string,
    age?: number,
    isAdmin: boolean,
    }

// let user:Iuser = {
//     name:'Jonh',
//     age: 30,
//     'Likes bieds': true,
// }
// let key: string = ('name')

// console.log(user['key']);

// let fruit = ("apple")

// let bag = {
//     [fruit + 'Computers']: 5
// }

// console.log(bag.appleComputers);

// function makeUser (name:string, age:number) {
//     return {
//         name,
//         age
//     }
// }
// let user = makeUser('John', 30)
// console.log(user.age, user.name);

// let obj = {
//    0: 'Text'
// }

// console.log(obj['0']);

// let user = {
//     name: 'John',
//     age: 30
// }

// console.log('name' in user);
// console.log('blabl' in user);

// let obj ={
//     test: undefined
// }

// console.log(obj.test);
// console.log("test" in obj);


let user:any = {
    name: 'Jonh',
    age: 25,
    isAdmin: true,
}

for (let key in user) {
    console.log(key);
    console.log(user[key]);
    
}  

// interface Icodes {
//     '+49': string,
//     '+41': string,
//     '+44': string,
//     '+1': string,
// }

// let codes: Icodes = {
//     '+49': 'Germaiy',
//     '+41': 'Scvets',
//     '+44': 'Velic',
//     '+1': 'SCA',
// }

// for (let code in codes) {
//     console.log(code);
    
// // }

// const course = {
//     name: 'Ivan',
//     lastNama: 'Smit',
// }

// for (const prop of course){
//     console.log([prop]);
    
// }

// // const elements = Object.keys(course)
// // console.log(elements);
//
// interface Employee {
//     name?: string;
//     salary: number;
//   }
//
//   const emp: Employee = {
//     name: 'Tom',
//     salary: 123,
//   };
//
// //   const name: string = emp.name !== undefined ? emp.name : '';
//
//   console.log(emp.name);