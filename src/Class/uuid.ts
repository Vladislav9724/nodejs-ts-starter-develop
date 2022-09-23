// const {v4: uuidv4} = require('uuid')
//
// interface ITask {
//     id: string,
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
//     title: 's t',
//     body: 's t',
//     isCompleted: true,
//     createdAt: new Date().toLocaleString(),
//     updatedAt: new Date().toLocaleString()
// }
// const task2 = {
//     id: uuidv4(),
//     title: 'Hello',
//     body: 'World',
//     isCompleted: false,
//     createdAt: new Date().toLocaleString(),
//     updatedAt: new Date().toLocaleString()
// }
//
// interface IToDoList {
//
//     adding(task: ITask): ITask[]
//     delete(id: string): ITask[]
// }
//
// class ToDoList implements IToDoList {
//
//     tasks:ITask[] = []
//
//     public adding(task: ITask): ITask[] {
//         this.tasks.push(task)
//         return this.tasks
//     }
//
//     public delete(id: string): any {
//         for (const value of this.tasks) {
//             if (value.id === id){
//               const ps =  this.tasks.filter(value => value.id !== id)
//                 return ps
//             }
//
//         }
//         // let filter = this.tasks.filter(value => value.id !== id)
//         // return filter
//
//
//     }
//
// }
//
// const toDoList = new ToDoList()
//
// const resultAdding = toDoList.adding(task)
// const resultAdding1 = toDoList.adding(task1)
// const resultAdding2 = toDoList.adding(task2)
// console.log(resultAdding)
//
// const id = task2.id
// console.log(id)
//
//
// const resultDelete = toDoList.delete(id)
// console.log(resultDelete)
