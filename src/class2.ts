interface IUser {
    userId: number,
    name: string,
    city: string,
    age: number,
    address?: IAddress,
    photo?: {
        url: string
    }
}

interface IAddress {
    street: string,
    house: number,
    apartment: number
}

const userGetKey = {
    userId: 1,
    name: 'Vova',
    city: 'Lviv',
    age: 26,
    address: {
        street: 'Lvivska',
        house: 20,
        apartment: 91,
    }
}

interface IGetUserKey {
    getUserKey(): string[]
    userGetKey:IUser
}

class UserGetKey implements IGetUserKey {
    public userGetKey: IUser

    constructor(userGetKey: IUser) {
        this.userGetKey = userGetKey
    }

    public getUserKey(): string[] {
        const getUserKey: string[] = []
        for (let key in this.userGetKey) {
            getUserKey.push(key)

        }
        return getUserKey
    }

}

const getKey = new UserGetKey(userGetKey)
console.log(getKey.getUserKey())
