import readline from 'readline/promises'
import { stdin as input, stdout as output } from 'process'

const rl = readline.createInterface({ input, output })

function show () {
    console.log(` ---- Main Menu ----
    1. Show all books
    2. Show all authors
    3. Join books with author
    4. Delete a book
    5. Exit        
    `)
}

async function readChoice() {
    const choice = await rl.question('Select a menu option: ')

    switch (choice) {
    case '1': await menuChoice1(); break
    case '5': return false
    default: console.log('Invalid option, try again. ')
    }
    return true
}

async function menuChoice1 () {
    console.log('# Doing menu choice 1 ')
    await rl.question('Press enter to continue...')
}

do {
    show()
} while ( await readChoice () )


rl.close()