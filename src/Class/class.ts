const {v4: uuidv4} = require('uuid')

interface ITask {
    id: string,
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
const task1 = {
    id: uuidv4(),
    title: 'Hello',
    body: 'World',
    isCompleted: true,
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString()
}

interface IToDoList {

    adding(task: ITask): ITask[]
    delete(id: string): ITask[]
}

class ToDoList implements IToDoList {

    private tasks:ITask[] = []

    public adding(task: ITask): ITask[] {
        this.tasks.push(task)
        return this.tasks
    }

    public delete(id: string): ITask[] {
        let filter = this.tasks.filter(value => value.id !== id)
        return filter
    }

}

const toDoList = new ToDoList()

const resultAdding = toDoList.adding(task)
const resultAdding1 = toDoList.adding(task1)
console.log(resultAdding)

const id = task.id

const resultDelete = toDoList.delete(id)
console.log(resultDelete)
