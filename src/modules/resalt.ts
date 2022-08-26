import {User} from "./classGet";
import {userTanya, userVlad} from "./object1";




const getUserKey = new User(userVlad, userTanya)

console.log(getUserKey.getKey())