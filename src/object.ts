
interface Ianimal {
    type: string,
    age: number,
    name: string,
    address?: Iaddress,
}

interface Iaddress {
    city: string,
    street?: string,
    house?: number,

}


function animals2 (array:Ianimal[]): string[] {
    const result: string[] = []
    for (let index in array){
        const animal = array[index]
        // if("address" in animal){
        // if(animal.hasOwnProperty('address')){
        if(animal.address?.city){
            result.push(animal.address.city)
        }

    }

    return result
}


const dog: Ianimal = {
    type: 'shpits',
    age: 4,
    name: 'Patron',

}

const cat: Ianimal = {
    type: 'siamese',
    age: 8,
    name: 'Barsic',
    address:{
        city: 'Dnipro',
        street: 'Gagarina',
    }

}

const parrot: Ianimal = {
    age: 1,
    name: 'Cache',
    type: 'red',
    address:{
        city: 'Lozova',
        street: 'Roboha',
        house: 15,
    }
}

// const response = animals ([dog, cat, parrot])
// console.log(`Age = ${response}`)
//
// const response2 = animals1 ([dog, cat, parrot])
// console.log(`Name: ${response2}`);

const response3 = animals2 ([dog, cat, parrot])
console.log(response3);


