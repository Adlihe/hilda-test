

const toDoList = []


export function addTask(task) {
    if (task) {
        toDoList.push(task)
        console.log(`Task ${task} was added.`)
    }
    else {
        console.log("Please enter a valid task.")
    }
}

export function displayTasks() {
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

export function deleteTask(index) {
    if (index > 0 && index <= toDoList.length) {
        const removed = toDoList.splice(index - 1, 1)
        console.log(`Task ${removed} was removed.`)
    }
    else {
        console.log("Please enter a valid task number.")
    }
}
