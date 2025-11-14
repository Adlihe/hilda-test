import { Tasks } from './tasks/Tasks.js'

const tasks = new Tasks()

tasks.add("Wash clothes")
tasks.add("Do the dishes")
tasks.add("Go for walk")
tasks.display()

tasks.delete(2)
tasks.display()
