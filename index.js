const express = require('express')
const app = express()

const database = require('./database/queries')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))


app.get('/', async (req, res) => {
    
})


app.get('/db', database.connetionVerify)

app.listen(3000, () => {
    console.log("Listening on http://localhost:3000/")
})