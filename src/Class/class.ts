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

interface IToDoList {
    adding(title: string, body: string): ITask

    editing(id: string, title: string, body: string, updatedAt: string): ITask

    find(): ITask[]

    delete(id: string): string
}

class ToDoList implements IToDoList {

    tasks: ITask[] = []

    public adding(title: string, body: string): ITask {
        const task = {
            id: uuidv4(),
            title: title,
            body: body,
            isCompleted: false,
            createdAt: new Date().toLocaleString(),
            updatedAt: new Date().toLocaleString()
        }
        this.tasks.push(task)
        const newTask: ITask | undefined = this.tasks.find((elem: ITask) => elem.id === task.id)
        if (newTask === undefined) {
            throw "NO task"
        }
        return newTask

    }

    public editing(id: string, title: string, body: string, updatedAt: string): ITask {
        const editingTask: ITask | undefined = this.tasks.find((elem: ITask) => elem.id === id)
        if (editingTask === undefined) {
            throw "NO task"
        }

        editingTask.title = title
        editingTask.body = body

        return editingTask

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


}

const toDoList = new ToDoList()

const resultAdding = toDoList.adding(faker.word.noun(), faker.word.noun())
const resultAdding1 = toDoList.adding(faker.word.noun(), faker.word.noun())
const resultAdding2 = toDoList.adding(faker.word.noun(), faker.word.noun())
const resultFind = toDoList.find()

const resultEditing = toDoList.editing(resultAdding1?.id, 'CEK', 'VRIP', new Date().toLocaleString())
console.log(`Task array  = ${JSON.stringify(resultFind, null, 2)}`)
console.log(`Editing task   = ${JSON.stringify(resultEditing, null, 2)}`)

const resultDelete = toDoList.delete(resultAdding1?.id)
console.log(`Id from the deleted task id: ${resultDelete}`)

