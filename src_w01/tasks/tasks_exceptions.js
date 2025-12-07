/**
 * Functions to enable a toDo list.
 */

/**
 * Container of tasks. 
 */
const toDoList = []

/**
 * Add a task to the tasklist.
 * 
 * @param {String} task Description of task to add.
 * @returns {void} 
 */
export function addTask(task) {
    if (typeof task !== 'string') {
        throw new Error('Task must be a valid string')
    }  

    toDoList.push(task)
    console.log(`Task ${task} was added.`)

    /*
  if (task) {
    toDoList.push(task)
    console.log(`Task ${task} was added.`)
  }
  else {
    console.log("Please enter a valid task.")
  }
  */
}

/**
 * Display all tasks in the tasklist.
 * 
 * @returns {void}
 */
export function displayTasks() {
    if (toDoList.length === 0) {
        console.log("Your to-do list is empty.")
        return
    }

    console.log("Your to-do list:")
    toDoList.forEach((element, index) => {
        console.log(`${index + 1}.  ${element}`)
    })

    /*
  for (let i = 0 ; i <= toDoList.length; i++) {
    console.log(`${i + 1}.  ${toDoList[i]}`)
  }*/

    /*
  if (toDoList.length === 0) {
    console.log("Your to-do list is empty.")
  }
  else {
    console.log("Your to-do list:")
    toDoList.forEach((element, index) => {
      console.log(`${index + 1}.  ${element}`)
    })
  }
    */
}

/**
 * Remove a task from the todolist.
 * 
 * @param {Number} index
 * @returns {void}
 */
export function deleteTask(index) {
    if (typeof index !== 'number' || !Number.isInteger(index)) {
        throw new Error('The index is not a integer number.')
    }

    if (toDoList.length === 0) {
        throw new Error('You can not remove items from an empty list.')
    }

    if (index < 1 && index > toDoList.length) {
        throw new Error('The index is out of bounds.')
    }

    const removed = toDoList.splice(index - 1, 1)
    console.log(`Task ${removed} was removed.`)

    /*
  if (index > 0 && index <= toDoList.length) {
  const removed = toDoList.splice(index - 1, 1)
    console.log(`Task ${removed} was removed.`)
  }
  else {
    console.log("Please enter a valid task number.")
  }*/
}
