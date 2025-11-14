import { addTask, displayTasks, deleteTask } from './tasks/tasks.js'

addTask("Wash clothes")
addTask("Do the dishes")
addTask("Go for walk")
displayTasks()

deleteTask(2)
displayTasks()
