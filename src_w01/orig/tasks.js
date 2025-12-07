

const toDoList = []


function addTask(task) {
    if (task) {
        toDoList.push(task)
        console.log(`Task ${task} was added.`)
    }
    else {
        console.log("Please enter a valid task.")
    }
}

function displayTasks() {
    if (toDoList.length === 0) {
        console.log("Your to-do list is empty.")
    }
    else {
        console.log("Your to-do list:")
        toDoList.forEach((element, index) => {
            console.log(`${index + 1}.  ${element}`)

        })
    }
}

function deleteTask(index) {
    if (index > 0 && index <= toDoList.length) {
        const removed = toDoList.splice(index - 1, 1)
        console.log(`Task ${removed} was removed.`)
    }
    else {
        console.log("Please enter a valid task number.")
    }
}


addTask("Wash clothes")
addTask("Do the dishes")
addTask("Go for walk")
displayTasks()

deleteTask(2)
displayTasks()
