const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const {userController} = require('../controllers/createUsersController')



app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', () => {
    console.log('hello world')
})



app.post('/cadastrar', userController.store)

app.listen(3450, () => {
    console.log('Server is running!')
})
require('../database/db.js')


