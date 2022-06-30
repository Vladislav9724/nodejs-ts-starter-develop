// function helloUser(name: string): string {
//     return `Hello ${name}!!!`
// }

// function detect_data_type(value: any):any{
//   return typeof(value)
// }
// const response = detect_data_type('Hello!')
// console.log(response);

function returnNumber(name: string, age: number ): string {
    console.log(`Hello ${name}!!!`);
    return name
}
const result: string = returnNumber('Ivan', 25)
console.log(result);

const object_empty = {}

const object = {
    name: 'Vlad', 
    age: 25
}
console.log(`object= ${JSON.stringify(object, null ,2)}`)
console.log(`name= ${JSON.stringify(object.name, null ,2)}`)

interface iGreatestLowest {
    minimum: number, maximum: number
}
function greatest_lowest (arr_num: number[]):iGreatestLowest{
  const min = Math.min(...arr_num)
  const max = Math.max(...arr_num)
  return {minimum: min, maximum: max}
}
const output: iGreatestLowest = greatest_lowest([1,2,3,4,5,6,7])
console.log(`output= ${JSON.stringify(output, null ,2)}`)


