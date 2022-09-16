const {v4: uuidv4} = require('uuid')

interface ITask {
    id: any,
    title: string,
    body: string,
    isCompleted: boolean,
    createdAt: string,
    updatedAt: string
}

const task =  {
    id: uuidv4(),
    title: 'some title',
    body: 'some title',
    isCompleted: false,
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString()
}


interface IAddingTask {
    adding(
        task: ITask
    ): ITask[]

}

class AddingTask  implements IAddingTask {


    public adding (task: ITask): ITask [] {
        const tasks: ITask [] = []
        tasks.push(task)
        return tasks

    }

}
const addingTask = new AddingTask()
const result = (addingTask.adding(task))
console.log(result)

