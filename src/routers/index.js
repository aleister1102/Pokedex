const pokemonsRouter = require('./pokemons')
const siteRouter = require('./site')

function routing(app) {
    app.use('/pokemons', pokemonsRouter)
    app.use('/', siteRouter)
}

module.exports = routing
