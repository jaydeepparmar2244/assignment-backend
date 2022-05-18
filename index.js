const express = require('express')
const bodyParser = require('body-parser')
const DB = require('./services/DB');
const app = express()
const port = 8080

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/students', async function (req, res, next) {
    const students = await DB('students').select(['id', 'firstName','lastName']);
    return res.json(students);
});

app.get('/students/:id', async function (req, res, next) {
    const id = req.params.id
    const students = await DB('students').where('id',id).select(['id', 'firstName','lastName']);
    return res.json(students);
});

app.get('/books', async function (req, res, next) {
    const books = await DB('books').select(['id', 'bookName','author','borrowDate','returnDate','borrowedBy']);
    return res.json(books);
});

app.get('/books/:id', async function (req, res, next) {
    const id = req.params.id
    const books = await DB('books').where('id',id).select(['id', 'bookName','author','borrowDate','returnDate','borrowedBy']);
    return res.json(books);
});

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })