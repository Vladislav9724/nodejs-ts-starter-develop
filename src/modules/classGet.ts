import {IGetKey, IUser} from "./interfece";
import {userVlad} from "./object1";


export class User  implements IGetKey{
    public userVlad: IUser
    public userTanya: IUser

    constructor(userVlad: IUser, userTanya: IUser) {
        this.userVlad = userVlad
        this.userTanya =userTanya
    }

    public getKey (): string[] {
        const userKey: string[] = []
        for(let key in this.userVlad){
            userKey.push(key)

            if (typeof this.userVlad[key] === 'object'){
                for (let keyIf in this.userVlad[key]){
                    userKey.push(keyIf)
                }
            }

            if(userVlad.married && userVlad.married === true){
                for (let key1 in this.userTanya){
                    userKey.push(key1)
                }
            }

        }
        return userKey
    }
}


