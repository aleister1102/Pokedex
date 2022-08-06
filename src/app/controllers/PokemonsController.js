const Pokemon = require('../models/Pokemon')
const { multipleMongooseToObject } = require('../../utils/mongoose')

class PokemonsController {
    // [GET] /news
    index(req, res, next) {
        Pokemon.find({})
            .then((pokemons) => {
                res.render('pokemons', {
                    pokemons: multipleMongooseToObject(pokemons),
                })
            })
            .catch(next)
    }

    // [GET] /news/:slug
    show(req, res) {
        res.send('Pokemons DETAILED')
    }
}

module.exports = new PokemonsController()
