
class Developer1 {

    constructor(
        public name: string,
        private salary: number,
    ) { }

    getInfo (){
        console.log('name', this.name)
        console.log('salary', this.salary)
    }


}

const developer = new Developer1('Vlad', 15000)
console.log('name', developer)
