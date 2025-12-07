import { addTask, displayTasks, deleteTask } from './tasks/tasks_exceptions.js'

try {
    addTask("Wash clothes")
    addTask("Do the dishes")
    addTask("Go for walk")
    displayTasks()
    //addTask()

    deleteTask(2)
    displayTasks()
} catch (error) {
    console.log(error.message)

    throw error
}
