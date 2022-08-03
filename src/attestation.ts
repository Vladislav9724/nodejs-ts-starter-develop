// 1. Как добавить елемент в начало массива
// let arr = [1,2]
// arr.unshift(0)
// console.log(arr)
// // 2. Как добавить елемент в конец массива
// let arr1 = [1,2]
// arr1.push(0)
// delete arr1[1]
// console.log(arr1[1])
// // 3. Как обойти массив, с помощью каких операторов, перечислить столько способов сколько знаешь\сможешь найти
// let fruts = ['Apple', 'lemon', 'plum']
// console.log(fruts.length)
//
//
// // 4. Как удалить єлемент массива
// let arr2 = [1, 2 , 3]
// delete arr2[1]
// console.log(arr2)
// // 5. Как получить елемент массива по индексу
// let arr3 = [1, 2 , 3]
// console.log(arr3[1])
// // 6. Как создать объект
// let user1 = {}
// // let user2 = new object()
// // 7. Как получить значение по свойству объекта
// let user3 ={
//     name: 'Ivan',
//     age: 35,
// }
// console.log(user3.age)
// // 8. Как указать что свойство объекта не обязанное
// let user4 ={
//     name: 'Ivan',
//     age: 35,
// }
// console.log(user4.age)
// // 9. Как перебрать все свойства объекта
// let user5 ={
//     name: 'Ivan',
//     age: 35,
// }
// console.log(user5)
// 10. Как проверить существует свойство в объекте или нет
let user6 ={
    name: 'Ivan',
    age: 35,
}
console.log('name' in user6)
// // 11. Какие бывают виды функций
// function sayHi(){
//     console.log('Hello')
// }
//
// console.log(sayHi())
// let sayHi1 = function (){
//     console.log('Hello')
// }
// console.log(sayHi1())
//
// let resalt = (x:number, y:number) => x + y;
// console.log(resalt(1, 3 ))
// // 12. Как создать копию объекта
// let user7 = {
//     name: 'Ivan',
//     age: 5,
// }
// // let clone = {}
// // for (let copy in user7) {
// //     clone[copy] = user7[copy]
// // }
// // clone.name = 'Oleg'
// // 13. Что делает команда Object.assign
// let user8 = {
//     name: 'Oleg',
//     lastName: 'Smat',
// }
// let copyUser8 = Object.assign({}, user8)
// console.log(copyUser8)
//
// // 14. Какие существуют методы для работы с объектами, что такое Object
// // 15. Как создать интерфейс для функции
// interface Iuser {
//     name:string,
//     age: number,
// }
// 16. Что значит ключевое слово this и для чего оно используется

// interface Iuser9 {
//     name:string,
//     age:number,
//     sayHi(): void
// }

let user9 = {
    name: 'Ivan',
    age:25,
    sayHi()
    {
        console.log(this.name)
    }
};
user9.sayHi()


// // 17. Какие существую типы данных
// // string,
// // number,
// // null,
// // undefined,
// // boolean,
// // bigint,
// // object,
// // symbol.
//
//
//
// // 18. Что такое область видимости переменных
// if(true) {
//     const message = 'Hello'
//     console.log(message)
// }
//
// // 19. Что такое замыкание
// let a = 'global'
//
// function outer(){
//     let b = 'outer'
//
//     function inner(){
//         let c = 'inner'
//         console.log(c)
//         console.log(b)
//         console.log(a)
//     }
//
//     console.log(a)
//     console.log(b)
//     inner()
// }
// outer()
// console.log(a)
//
// function  person(){
//     let name = 'Peter'
//     return function displayName() {
//         console.log(name)
//     }
// }
// let peter = person()
// peter()
//
function getCounter() {
    let counter = 0
    if(counter > 10){
        let a = 5
        return a
    }
    return function (){
        return counter++

    }
}
// let count = getCounter()
// console.log(count())
// console.log(count())

function a (n:number){
    return function (){
        console.log(10 * n)
    }
}

const d = a(4)
d()

