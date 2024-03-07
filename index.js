require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('*', (req, res) => {
    res.render('error404').send('<h1>404 Page</h1>')
})

app.listen(process.envPORT)

/*require('dotenv').config()
const express = require('express')
const app = express()

app.use('/places', require('./controllers/places'))

//middleware



//routes
app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.listen(process.env.PORT)*/

/*require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('*', (req, res) => {
    
})

app.listen(process.env.PORT)*/

/*require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('*', (req, res) => {
    res.send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)*/

/*require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)*/



