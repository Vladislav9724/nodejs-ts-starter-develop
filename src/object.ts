
interface Ianimal {
    type: string,
    age: number,
    name: string,
    address?: Iaddress
}

interface Iaddress {
    city: string,
    street: string,
    house?: number
} 



function animals (array:Ianimal[]):number[]  {
    const result = []
    for (let animal in array){      
        result.push(array [animal].age)
    }
    return result
}

function animals1 (array:Ianimal[]):string[]  {
    const result = []
    for (let animal in array){        
        result.push(array [animal].name)
    }
    return result
}

function animals2 (array:Ianimal[]):any[]  {
    const result = []
    for (let animal in array){        
        result.push(array [animal].address)
    }
    return result
}


const dog: Ianimal = {
    type: 'shpits',
    age: 4,
    name: 'Patron',
    address:{
        city: 'Dnipro',
        street: 'Gagarina'
    }
}

const cat: Ianimal = {
    type: 'Siamese',
    age: 8,
    name: 'Barsic',
    
}

const parrot: Ianimal = {
    age: 1,
    name: 'cache',
    type: 'red',
    address:{
        city: 'Lozova',
        street: 'Roboha',
        house: 15,
    }
}

const response = animals ([dog, cat, parrot])
console.log(`Age = ${response}`)

const response2 = animals1 ([dog, cat, parrot])
console.log(`Name: ${response2}`);
const response3 = animals2 ([dog, cat, parrot])
console.log(response3);

