import express from 'express'
import { db } from '../database.js'

export const router = express.Router()

// Hello world route in json
router.get('/hello-world', (req, res) => {
  res.json({
    message: 'Hello World! from JSON by Mumintrollet'
  })
})

// Connect to the database and make a SELECT
router.get('/select', async (req, res) => {
    // Prepare SQL
    const sql = `
    SELECT 
        * 
    FROM book;
    `

    // Make a database query
    const [resultset] = await db.query(sql)
    //console.table(resultset)
    res.json(resultset)
})

// Get all books
router.get('/books', async (req, res) => {
    const sql = `
    SELECT 
        * 
    FROM book;
    `
    const [resultset] = await db.query(sql)
    res.json(resultset)
})

// Get all authors
router.get('/authors', async (req, res) => {
    const sql = `
    SELECT 
        * 
    FROM author;
    `
    const [resultset] = await db.query(sql)
    res.json(resultset)
})

// Get all details on books with their authors
router.get('/books2authors', async (req, res) => {
    const sql = `
    SELECT 
        * 
    FROM book
        INNER JOIN author
            ON book.author_id = author.id;
    `
    const [resultset] = await db.query(sql)
    res.json(resultset)
})

// Get all details on books with their authors
router.get('/books2authors-filter', async (req, res) => {
    const sql = `
    SELECT 
        book.id,
        book.title,
        book.publish_year,
        book.author_id,
        author.name,
        author.birth_year
    FROM book
        INNER JOIN author
            ON book.author_id = author.id
    WHERE
        title LIKE ?
        OR name LIKE ?;
    `

    let searchString = '%' + req.query.search + '%'
    const [resultset] = await db.query(sql, [searchString, searchString])
    res.json(resultset)
})

// Get book by id
router.get('/book/:id', async (req, res) => {
    const sql = `
    SELECT 
        * 
    FROM book
    WHERE
        id = ?
    `
    const [resultset] = await db.query(sql, [req.params.id])
    res.json(resultset)
})

// Get author by id
router.get('/author/:id', async (req, res) => {
    const sql = `
    SELECT 
        * 
    FROM author
    WHERE
        id = ?
    `
    const [resultset] = await db.query(sql, [req.params.id])
    res.json(resultset)
})


