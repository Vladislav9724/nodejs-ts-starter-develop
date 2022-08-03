

// let arr = ['Elena', 'Jnon', 'Maria', 'Petr', 'Ivan', 'Anna']
// arr.push('Roma')
// arr.unshift('Oleg')
//
// for (let item of arr) {
//     console.log(`Hello ${item}!!!`)
// }
//
//
// console.log(arr.length)
//
// const limit = 6500
//
// let data = [3000, 5000, 4500, 7900, 3400, 9000, 12000, 5500]
// data.push(1000)
// let sum = 0
// for (let item of data) {
//     if (item < limit) {
//         let  diff = limit - item
//         sum = sum + diff
//     }
//
// }
// console.log(`Sum: ${sum}`)
//
// let usd = [25.4, 24.54, 26.08, 24.06, 25.27, 25.27, 24.61, 26.81]
//
// let max = usd[0]
// let min = usd[0]
//
//
// for (let item of usd){
//     if (item > max) {
//         max = item
//     }
// }
// console.log(`Maximum: ${max}`)
//
// for (let item of usd){
//     if (item < min) {
//         min = item
//     }
// }
// console.log(`Minimum: ${min}`)
//
// let sum = 0
// for (let item of usd) {
//     sum = sum+item
// }
// let average = sum / usd.length
//
// console.log(`Average rate ${average}`)
//
// let usd = [25.4, 24.54, 26.08, 24.06, 22, 25.27, 24.61, 23]
// //
// // let uan = []
// //
// // for (let item of usd){
// //     let rate = 1 /item
// //     uan.push(rate)
// // }
// //
// // console.log(uan)
//
// let rise = 0
// let fall = 0
// let i = 2
// for (let i = 0; i < usd.length - 1; i++){
//     if(usd[i] > usd[i+1]){
//         fall++
//     }else if(usd[i] < usd[i+1]){
//         rise++
//     }
// }
// console.log(`Rise: ${rise}`)
// console.log(`Fall: ${fall}`)
//
// if(rise > fall){
//     console.log('Rise Trend')
// } else if(rise < fall){
//     console.log('Fall Trend')
// } else {
//     console.log('No Trend')
// }
// console.log(usd.length)
//
// let user = {name: 'Ivan'};
// let admin = {name: 'Admin'};
//
// function say (){
//     console.log(this.name)
// }
// user.f = say
// admin.f = say


