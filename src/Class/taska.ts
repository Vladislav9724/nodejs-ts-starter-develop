const {v4: uuidv4} = require('uuid')
const {faker} = require('@faker-js/faker');

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
    title: faker.word.noun(),
    body: faker.word.noun(),
    isCompleted: false,
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString()
}
const task1 = {
    id: uuidv4(),
    title: faker.word.noun(),
    body: faker.word.noun(),
    isCompleted: false,
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString()
}
const task2 = {
    id: uuidv4(),
    title: faker.word.noun(),
    body: faker.word.noun(),
    isCompleted: false,
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString()
}

interface IToDoList {
    adding(task: ITask): ITask

    find(): ITask[]

    delete(id: string): string

    editing(): ITask[]
}

class ToDoList implements IToDoList {

    tasks: ITask[] = []


    public adding(task: ITask): ITask {

        this.tasks.push(task)
        const newTask: ITask | undefined = this.tasks.find((elem: ITask) => elem.id === task.id)
        if (newTask === undefined) {
            throw "NO task"
        }
        return newTask

    }

    public find(): ITask [] {
        return this.tasks
    }


    public delete(id: string): string {
        const indexId = this.tasks.findIndex(index => index.id === id)
        if (indexId === undefined) {
            throw "NO TASK"
        }
        this.tasks.splice(indexId, 1)
        return id

    }

    public editing(): ITask[] {

        const editingTask = this.tasks.map((taskEd: ITask) => ({
            ...taskEd,
            id:     taskEd.id === task.id ? "24" : taskEd.id,
            title:  taskEd.id === task.id ? "TITLE" : taskEd.title,
            body:   taskEd.id === task.id ? "BODY" : taskEd.body,
            isCompleted: taskEd.id === task.id? true: taskEd.isCompleted,
            createdAt: taskEd.id === task.id? "06.10.2022": taskEd.createdAt,
            updatedAt: taskEd.id === task.id? "06.10.2022": taskEd.updatedAt
        }));

        return editingTask

    }

}

const toDoList = new ToDoList()

const resultAdding = toDoList.adding(task)
toDoList.adding(task1)
toDoList.adding(task2)
const resultEditing = toDoList.editing()
const resultFind = toDoList.find()
const resultDelete = toDoList.delete(resultAdding?.id)


console.log(`Result = ${JSON.stringify(resultFind, null, 2)}`)
console.log(`Id from the deleted task: ${resultDelete}`)
console.log(`Result editing = ${JSON.stringify(resultEditing, null, 2)}`)
