

interface IID{
    id:string,
    title: string,
    body: string,
    isCompleted: boolean,
    createdAt: string,
    updatedAt: string
}
const {v4: uuidv4} = require('uuid')

const obj =  {
    id: uuidv4(),
    title: 'some title',
    body: 'some title',
    isCompleted: false,
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString()
}

interface IObject {

    deleting(): object
    editing(): object
    display(): object
}

class Property  implements IObject{
    public obj: IID

    constructor(obj:IID) {
        this.obj = obj
    }

    deleting(): object {
        const tasks = []
        tasks.push(obj)
        tasks.pop()
        return tasks

    }
    editing(): object{
        const tasks = []
        tasks.push(obj)
        return tasks
    }


    display(): object{
    const tasks = []
    tasks.push(obj)
        return tasks

    }

}
const go = new Property(obj)
console.log(go.deleting())
console.log(go.editing())
console.log(go.display())