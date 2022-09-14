

interface IObject{
    id: string,
    title: string,
    body: string,
    isCompleted: boolean,
    createdAt: string,
    updatedAt: string
}
const {v4: uuidv4} = require('uuid')

const object =  {
    id: uuidv4(),
    title: 'some title',
    body: 'some title',
    isCompleted: false,
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString()
}

interface IProperty {

    deleting(): object
    editing(): object
    display(): object
}

class Property  implements IProperty{
    public obj: IObject

    constructor(obj:IObject) {
        this.obj = obj
    }

    deleting():object {
        const tasks = []
        tasks.push(object)
        tasks.pop()
        return tasks

    }
    editing(): object{
        const tasks = []
        tasks.push(object)
        return tasks
    }


    display(): object []{
    const tasks = []
    tasks.push(object)
        return tasks

    }

}
const go = new Property(object)
console.log(go.deleting())
console.log(go.editing())
console.log(go.display())