const {v4: uuidv4} = require('uuid')

interface ITask {
    id: any,
    title: string,
    body: string,
    isCompleted: boolean,
    createdAt: string,
    updatedAt: string
}

const task = {
    id: uuidv4(),
    title: 'some title',
    body: 'some title',
    isCompleted: false,
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString()
}

interface IToDoList {
    adding(
        task: ITask
    ): ITask[]

}

class ToDoList implements IToDoList {

    public adding(task: ITask): ITask [] {
        const tasks: ITask [] = []
        tasks.push(task)
        return tasks

    }
}

const toDoList = new ToDoList()
const result = (toDoList.adding(task))
console.log(result)

