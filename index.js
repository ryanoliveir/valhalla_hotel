const express = require('express')
const app = express()

const database = require('./database/queries')
const session = require('./middlewares/config/session')

app.use(session)
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))

const auth = require('./services/controllers/authController')
const registerUser = require('./services/controllers/registerController')
const reservaController = require('./services/controllers/reservaController')

const login = require('./routes/login')
const menu = require('./routes/menu')
const cadastro = require('./routes/cadastro')
const home = require('./routes/home')
const reserva = require('./routes/reservas')


app.use('/auth', auth)
app.use('/register', registerUser)
app.use('/datahotel', reservaController)

app.use('/login', login)
//app.use('/menu', menu)
app.use('/cadastro', cadastro)
app.use('/home', home)
app.use('/reserva', reserva)



app.get('/', async (req, res) => {
    
})


app.get('/db', database.connetionVerify)

app.listen(3000, () => {
    console.log("Listening on http://localhost:3000/")
})