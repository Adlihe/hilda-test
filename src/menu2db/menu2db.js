import readline from 'readline/promises'
import { stdin as input, stdout as output } from 'process'
import mysql from 'mysql2/promise'

const rl = readline.createInterface({ input, output })

// Create a connection
const db = await mysql.createConnection({
    host: process.env.DB_HOST, 
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA
})

function show () {
    console.clear()
    console.log(`----- Main menu -----
1. Show all books
2. Show all authors
3. Join books with authors
4. Delete a book
5. Exit    
    `)
}

async function readChoice () {
    const choice = await rl.question('Select a menu option: ')

    switch (choice) {
        case '1': await menuChoice1(); break;
        case '5': return false; break
        default: console.log('Invalid option, try again')
    }
    return true
}

async function menuChoice1 () {
    console.log('\n# Show all books in the database')

    const sql = `
    SELECT 
        * 
    FROM book;
    `
    const [resultset] = await db.query(sql)
    console.table(resultset)

    await rl.question('Press enter to continue...')
}

do {
    show()
} while ( await readChoice() )

rl.close()
await db.end()
