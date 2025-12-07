import express from 'express'
import { db } from '../database.js'

export const router = express.Router()

// Hello world route in json
router.get('/hello-world', (req, res) => {
    res.json({
        message: 'Hello World, from JSON again. '
    })
})

// Get all books from database
router.get('/books', async (req, res) => {
   
    //Prepare SQL 
    const sql = `
  SELECT 
    * 
  FROM BOOK;
  `
    //Make a database quety
    const [resultset] = await db.query(sql)
    //console.table(resultset)
  
    res.json(resultset)
})

//Get all authors from database
router.get('/authors', async (req, res) => {
   
    //Prepare SQL 
    const sql = `
  SELECT 
    * 
  FROM AUTHOR;
  `
    //Make a database quety
    const [resultset] = await db.query(sql)
  
    res.json(resultset)
})

//Get all details on books with their authors
router.get('/booksWauthors', async (req, res) => {
   
    //Prepare SQL 
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
  `
    //Make a database quety
    const [resultset] = await db.query(sql)
    res.json(resultset)
})

//Get all details on books with their authors
router.get('/book-filter', async (req, res) => {
   
    //Prepare SQL 
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
    WHERE title LIKE ?
    OR name LIKE ? ;
    `

    let searchString = '%' + req.query.search + '%'

    //Make a database quety
    const [resultset] = await db.query(sql, [searchString, searchString])
    res.json(resultset)
})

// Get book from id
router.get('/book/:id', async (req, res) => {
   
    //Prepare SQL 
    const sql = `
    SELECT 
        * 
    FROM BOOK
    WHERE 
        id = ?
    ;
  `
    //Make a database quety
    const [resultset] = await db.query(sql, [req.params.id])
    //console.table(resultset)
  
    res.json(resultset)
})
// Get author from id
router.get('/author/:id', async (req, res) => {
   
    //Prepare SQL 
    const sql = `
    SELECT 
        * 
    FROM AUTHOR
    WHERE 
        id = ?
    ;
  `
    //Make a database quety
    const [resultset] = await db.query(sql, [req.params.id])
    //console.table(resultset)
  
    res.json(resultset)
})