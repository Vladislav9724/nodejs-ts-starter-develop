// const dp = require('uuid')
// const id3 = dp
// console.log(id3.v4())
//
// let now = new Date()
// console.log(now)
//
// let Jan01_1970 = new Date(24*3600*1000)
// console.log(Jan01_1970)
//
// let Dec31_1969 = new Date (-24 * 3600 * 1000)
// console.log(Dec31_1969)
//
// let date = new Date()
// date.setSeconds(date.getSeconds() + 70)
// console.log(date)
//
// let start: any = new Date()
//
// for (let i = 0; i < 100000; i++){
//
//     }
//
// let end: any = new Date()
//
// console.log(`Цикл спрацював за ${end - start} `)


const http = require('http')
http.createServer((request:any, response:any) =>{
    response.write('Hollo world')
    request.end
}).listen(8000)