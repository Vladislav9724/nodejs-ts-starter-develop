

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

function getUserKey (user3: any): any{
    const userKey = []
    for (let key in user3 ){
        userKey.push(key)
    }
    return userKey

}

console.log(getUserKey(user3))


