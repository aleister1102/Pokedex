const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const path = require('path')
const app = express()
const port = 3000

// Static files
app.use(express.static(path.join(__dirname, 'public')))

// Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// HTTP logger
app.use(morgan('tiny'))

// Template engine
app.engine('hbs', engine({ extname: 'hbs' }))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

// Routes
app.get('/', (req, res) => {
    res.render('home')
})
app.get('/news', (req, res) => {
    console.log(req.query)
    res.render('news')
})
app.get('/search', (req, res) => {
    res.render('search')
})
app.post('/search', (req, res) => {
    console.log(req.body)
    res.send('')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
