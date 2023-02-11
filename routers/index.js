const pokemonsRouter = require('./pokemons')
const siteRouter = require('./site')
const userRouter = require('./user')

function routing(app) {
    app.use('/pokemons', pokemonsRouter)
    app.use('/user', userRouter)
    app.use('/', siteRouter)
}

module.exports = routing
