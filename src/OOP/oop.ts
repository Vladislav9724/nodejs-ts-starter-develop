//
// class Developer {
//     public isDeveloper: boolean
//     constructor(
//         public name: string,
//         public salary: number,
//     ) { this.isDeveloper = true}
//
//     getInfo (){
//         console.log('name', this.name)
//         console.log('salary', this.salary)
//     }
// }
//
// class SeniorDeveloper extends Developer {
//     constructor(
//         public name: string,
//         public salary: number,
//     ) {
//         super(name, salary);
//     }
//
//     teachJuniorDevs(): void {
//         console.log(`${this.name} tsches junior devs.`)
//     }
// }
//
//
//
// const developer = new SeniorDeveloper('Vlad', 5000)
//
// console.log(developer.isDeveloper)