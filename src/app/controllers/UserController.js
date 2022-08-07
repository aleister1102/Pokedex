const Pokemon = require('../models/Pokemon')
const {
    multipleMongooseToObject,
    mongooseToObject,
} = require('../../utils/mongoose')
const PokemonsController = require('./PokemonsController')

class UserController {
    // [GET] /stored/pokemons
    showPokemons(req, res, next) {
        Pokemon.find()
            .then((pokemons) =>
                res.render('user/stored-pokemons', {
                    pokemons: multipleMongooseToObject(pokemons),
                })
            )
            .catch(next)
    }

    // [GET] /trash/pokemons
    showDeletedPokemons(req, res, next) {
        Pokemon.findDeleted()
            .then((deletedPokemons) =>
                res.render('user/deleted-pokemons', {
                    deletedPokemons: multipleMongooseToObject(deletedPokemons),
                })
            )
            .catch(next)
    }
}

module.exports = new UserController()
