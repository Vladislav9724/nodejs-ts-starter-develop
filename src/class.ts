interface  IUser{
    userId: number,
        name: string,
        city: string,
        age: number,
        address: IAddress,

}
interface IAddress {
    street: string,
    house: number,
    apartment: number
}


const user3 = {
    userId: 3,
    name: 'Vlad',
    city: 'Dnipro',
    age: 25,
    address: {
        street: 'Gagarina',
        house: 57,
        apartment: 315,
    }
}

function getUserKey (user3: IUser): object{
    const userKey = []
    for (let key in user3 ){
        userKey.push(key)
    }
    return userKey

}

console.log(getUserKey(user3))


