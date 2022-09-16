const {v4: uuidv4} = require('uuid')

interface IFile {
    id: any,
    title: string,
    body: string,
    isCompleted: boolean,
    createdAt: string,
    updatedAt: string
}

const file =  {
    id: uuidv4(),
    title: 'some title',
    body: 'some title',
    isCompleted: false,
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString()
}


interface IMethods_for_the_task {
    adding: object
}

class Methods_for_the_task  implements IMethods_for_the_task {


    adding(file: IFile): object {
        const tasks = []
        tasks.push(file)
        return tasks

    }

}
const methodsForTheTask = new Methods_for_the_task()
console.log(methodsForTheTask.adding(file))

