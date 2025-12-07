import readline from 'readline/promises'
import { stdin as input, stdout as output } from 'process'
// How to connect to the databse
import mysql from 'mysql2/promise'

// Run this in terminal
//node --env-file=.env src/db/XXX

const rl = readline.createInterface({ input, output })

//Create a connection
const db = await mysql.createConnection({
    host: process.env.DB_HOST,   
    user: process.env.DB_USER,  
    password: process.env.DB_PASSWORD, 
    database: process.env.DB_SCHEMA, 

})

function show () {
    console.clear()
    console.log(` ---- Main Menu ----
    1. Show all books
    2. Show all authors
    3. Join books with author
    4. Insert a new book
    5. Exit        
    `)
}

async function readChoice() {
    const choice = await rl.question('Select a menu option: ')

    switch (choice) {
    case '1': await menuChoice1(); break
    case '2': await menuChoice2(); break
    case '3': await menuChoice3(); break
    case '4': await menuChoice4(); break
    case '5': return false
    default: console.log('Invalid option, try again. ')
    }
    return true
}

async function menuChoice1 () {
    console.log('\n# Show all books in the database')

    const sql = `
  SELECT 
    * 
  FROM BOOK;
`
    const [resultset] = await db.query(sql)
    console.table(resultset)

    await rl.question('Press enter to continue...')
}

async function menuChoice2 () {
    console.log('\n# Show all authors in the database')

    const sql = `
  SELECT 
    * 
  FROM AUTHOR;
`
    const [resultset] = await db.query(sql)
    console.table(resultset)

    await rl.question('Press enter to continue...')
}

async function menuChoice3 () {
    console.log('\n# Join books and authors')

    const sql = `
  SELECT 
    b.id AS book_id,
    b.title,
    b.publish_year,
    a.id,
    a.name,
    a.birth_year
  FROM book b
    JOIN author a 
        ON b.author_id = a.id
  ;
  `

    const [resultset] = await db.query(sql)
    console.table(resultset)

    await rl.question('Press enter to continue...')
}

async function menuChoice4 () {
    console.log('\n# Insert a book')

    const sql = `
INSERT INTO book (title, publish_year, author_id)
VALUES
    (?, ?, ?)
;
`
    const book_title = await rl.question('What is the title of the book: ')
    const year = await rl.question('What is the published year; ')
    const author_id = await rl.question('What is author_id; ')
    
    const sql2 = `
  SELECT * FROM BOOK;
  `
    //Make a database quety
    const [resultset] = await db.query(sql, [book_title, year, author_id])
    const [resultset2] = await db.query(sql2)
    console.table(resultset2)
    await rl.question('Press enter to continue...')
}


do {
    show()
} while ( await readChoice () )


rl.close()
//Close the connection
await db.end()