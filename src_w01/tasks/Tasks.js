/**
 * A class enable a toDo list.
 */

export class Tasks {

  #toDoList

  constructor () {
    this.#toDoList = []
  }

  add (task) {
    if (typeof task !== 'string') {
      throw new Error('Task must be a valid string')
    }  

    this.#toDoList.push(task)
    console.log(`Task ${task} was added.`)
  }

  display () {
    if (this.#toDoList.length === 0) {
      console.log("Your to-do list is empty.")
      return
    }

    console.log("Your to-do list:")
    this.#toDoList.forEach((element, index) => {
      console.log(`${index + 1}.  ${element}`)
    })
  }

  delete (index) {
    if (typeof index !== 'number' || !Number.isInteger(index)) {
      throw new Error('The index is not a integer number.')
    }

    if (this.#toDoList.length === 0) {
      throw new Error('You can not remove items from an empty list.')
    }

    if (index < 1 && index > this.#toDoList.length) {
      throw new Error('The index is out of bounds.')
    }

    const removed = this.#toDoList.splice(index - 1, 1)
    console.log(`Task ${removed} was removed.`)
  }
}
