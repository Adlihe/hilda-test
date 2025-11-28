// How to connect to the database
import mysql from 'mysql2/promise'

// Create a connection
const db = await mysql.createConnection({
    host: process.env.DB_HOST, 
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA
})

// Prepare SQL
const sql = `
INSERT INTO book (title, publish_year, author_id)
VALUES
    ('Completely new book', 2025, 1)
;
`

// Make a database query
const [resultset] = await db.query(sql)
console.table(resultset)

// Close the connection
await db.end()
