const express = require('express')
const bodyParser = require('body-parser')
const DB = require('./services/DB');
var app = express()
const port = 8080
var cors = require('cors');
app.use(cors())

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/students', async function (req, res, next) {
    const students = await DB('students').select(['id', 'firstName', 'lastName']);
    return res.json(students);
});

app.get('/students/:id', async function (req, res, next) {
    const id = req.params.id
    const students = await DB('students').where('id', id).select(['id', 'firstName', 'lastName']);
    return res.json(students[0]);
});

app.put('/students/:id', async function (req, res, next) {
    const id = req.params.id
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const students = await DB('students').where('id', id).update({ firstName: firstName, lastName: lastName })
    return res.json(students[0]);
});

app.get('/books', async function (req, res, next) {
    const books = await DB('books').select(['id', 'bookName', 'author', 'borrowDate', 'returnDate', 'borrowedBy']);
    return res.json(books);
});

app.get('/books/:id', async function (req, res, next) {
    const id = req.params.id
    const books = await DB('books').where('id', id).select(['id', 'bookName', 'author', 'borrowDate', 'returnDate', 'borrowedBy']);
    // console.log(books[0])
    return res.json(books[0]);
});

app.put('/books/:id', async function (req, res, next) {
    const id = req.params.id
    const bookName = req.body.bookName
    const author = req.body.author
    const borrowedBy = req.body.borrowedBy
    const borrowDate = req.body.borrowDate
    const returnDate = req.body.returnDate
    const books = await DB('books').where('id', id).update({ bookName: bookName, author: author, borrowDate: borrowDate, borrowedBy: borrowedBy, returnDate: returnDate })
    return res.json(books[0]);
});


app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})