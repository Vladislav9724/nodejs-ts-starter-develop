const {v4: uuidv4} = require('uuid')

interface IObject{
    id: string,
    title: string,
    body: string,
    isCompleted: boolean,
    createdAt: string,
    updatedAt: string
}

const object =  {
    id: uuidv4(),
    title: 'some title',
    body: 'some title',
    isCompleted: false,
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString()
}

interface IProperty {
    tasks: object
}

class Property  implements IProperty{

    constructor( public object: IObject) {
        this.object = object

    }

    tasks(object: IObject):object {
        const tasks = []
        tasks.push(object)
        return tasks

    }

}
const property = new Property(object)
console.log(property.tasks(object))
