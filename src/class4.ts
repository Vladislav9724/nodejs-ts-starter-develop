import {isKeyObject} from "util/types";

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


const user = {
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
    getUserKey(): any
    user:IUser
}

class User implements IGetUserKey {
    public user: any

    constructor(user: any) {
        this.user = user
    }

    public getUserKey(): any {
        const getUserKey: any = []
        for (let key in this.user) {
            getUserKey.push(key)
            if(typeof (this.user[key]) === "object"){
                for (key in this.user[key] ){
                    getUserKey.push(key)
                }
            }

        }
        return getUserKey
    }

}

const li = new User(user)
console.log(li.getUserKey())
