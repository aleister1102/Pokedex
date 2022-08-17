const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const methodOverride = require('method-override')
require('dotenv').config()

const SortMiddleware = require('./app/middlewares/SortMiddleware')

const routing = require('./routers')
const db = require('./config/db')

// Connect to DB
db.connect()

const app = express()
const PORT = process.env.PORT || 3000

// Static files
app.use(express.static(path.join(__dirname, 'public')))

// Middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Custom middlewares
app.use(SortMiddleware)

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
            sortable: (field, sort) => {
                const sortType = field === sort.column ? sort.type : 'default'

                const icons = {
                    default: 'fas fa-sort',
                    asc: 'fa-solid fa-arrow-down-short-wide',
                    desc: 'fa-solid fa-arrow-up-wide-short',
                }
                const types = {
                    default: 'desc',
                    asc: 'desc',
                    desc: 'asc',
                }
                const icon = icons[sortType]
                const type = types[sortType]

                return `
                <a href="?_sort&column=${field}&type=${type}">
                    <i class="${icon}"></i>
                </a>`
            },
        },
    })
)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

// Routes
routing(app)

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})
