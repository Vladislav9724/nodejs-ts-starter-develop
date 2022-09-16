const {v4: uuidv4} = require('uuid')

interface IObjectForWork {
    id: any,
    title: string,
    body: string,
    isCompleted: boolean,
    createdAt: string,
    updatedAt: string
}

const objectForWork =  {
    id: uuidv4(),
    title: 'some title',
    body: 'some title',
    isCompleted: false,
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString()
}


interface IMethodsForTheTask {
    adding(objectForWork: IObjectForWork): object

}

class MethodsForTheTask  implements IMethodsForTheTask {


    adding(ObjectForWork: IObjectForWork): object {
        const tasks = []
        tasks.push(objectForWork)
        return tasks

    }

}
const methodsForTheTask = new MethodsForTheTask()
const result = (methodsForTheTask.adding(objectForWork))
console.log(result)

