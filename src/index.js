const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
var methodOverride = require('method-override')

const { JSDOM } = require('jsdom')
const { window } = new JSDOM('')
const $ = require('jquery')(window)

const routing = require('./routers')
const db = require('./config/db')

// Connect to DB
db.connect()

const app = express()
const port = 3000

// Static files
app.use(express.static(path.join(__dirname, 'public')))

// Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// HTTP logger
app.use(morgan('tiny'))

// Method overriding
app.use(methodOverride('_method'))

// Template engine
app.engine(
    'hbs',
    engine({
        extname: 'hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    })
)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

// Routes
routing(app)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
