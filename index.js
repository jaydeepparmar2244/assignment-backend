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
    const users = await DB('students').select(['id', 'firstName','lastName']);
    return res.json(users);
  });

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })