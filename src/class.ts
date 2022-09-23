// const {v4: uuidv4} = require('uuid')
//
// interface ITask {
//     id: any,
//     title: string,
//     body: string,
//     isCompleted: boolean,
//     createdAt: string,
//     updatedAt: string
// }
//
// const task = {
//     id: uuidv4(),
//     title: 'some title',
//     body: 'some title',
//     isCompleted: false,
//     createdAt: new Date().toLocaleString(),
//     updatedAt: new Date().toLocaleString()
// }
// const task1 = {
//     id: uuidv4(),
//     title: 's te',
//     body: 's ti',
//     isCompleted: false,
//     createdAt: new Date().toLocaleString(),
//     updatedAt: new Date().toLocaleString()
// }
//
// interface IToDoList {
//
//     adding(
//         task: ITask,
//         task1:ITask): ITask[]
//
//     delete(
//         id: number
//     ): number
//
//
// }
//
// class ToDoList implements IToDoList {
//
//     tasks:any = []
//
//
//     public adding(task: ITask, task1:ITask): ITask[] {
//         this.tasks.push(task,task1)
//         return this.tasks
//     }
//
//     public delete(id: number): number {
//         for (const value of this.tasks) {
//             if (value.id === id){
//                 this.tasks.pop()
//             }
//
//         }
//
//         return this.tasks
//
//
//     }
//
//
// }
//
// const toDoList = new ToDoList()
//
// const resultAdding = toDoList.adding(task, task1)
// console.log(resultAdding)
//
// const resultDelete = toDoList.delete(task.id)
// console.log(resultDelete)
