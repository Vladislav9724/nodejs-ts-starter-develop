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

    delete(
        task: ITask
    ): any


}

class ToDoList implements IToDoList {

    tasks:any = []


    public adding(task: ITask): ITask[] {
        this.tasks.push(task)
        return this.tasks
    }

    public delete(task:ITask): ITask {
        const propertyId = task.id
        if(this.tasks.find((id:number) => task.id ===propertyId)){
            this.tasks.pop()
        }
        return this.tasks
    }


}

const toDoList = new ToDoList()

const resultAdding = toDoList.adding(task)
console.log(resultAdding)

const resultDelete = toDoList.delete(task)
console.log(resultDelete)
