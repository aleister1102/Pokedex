const newsRouter = require('./news')
const siteRouter = require('./site')

function routing(app) {
    app.use('/news', newsRouter)
    app.use('/', siteRouter)
}

module.exports = routing
