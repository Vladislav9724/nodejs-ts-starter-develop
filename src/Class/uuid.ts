

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

    adding(task: ITask): ITask
    // delete(id: string): string
}

class ToDoList implements IToDoList {

     tasks: ITask[] = []

    public adding(task: ITask): ITask {
        this.tasks.push(task)
        let newTask: ITask|undefined = this.tasks.find((elem:ITask) => elem.id === task.id)
        if (newTask !== undefined){
            return newTask
        } else throw 'No task found'

    }


    // public delete(id: string): string {
    //     let filter = this.tasks.filter(value => value.id !== id)
    //     return filter
    // }

}

const toDoList = new ToDoList()

const resultAdding = toDoList.adding(task)
const resultAdding1 = toDoList.adding(task1)
console.log(resultAdding)

const id = toDoList.adding(task.id)

// const resultDelete = toDoList.delete(id)
// console.log(resultDelete)
