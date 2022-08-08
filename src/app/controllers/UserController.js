const Pokemon = require('../models/Pokemon')
const {
    multipleMongooseToObject,
    mongooseToObject,
} = require('../../utils/mongoose')
const PokemonsController = require('./PokemonsController')
const { query } = require('express')

class UserController {
    // [GET] /stored/pokemons
    showPokemons(req, res, next) {
        let pokemonQuery = Pokemon.find()

        if (req.query.hasOwnProperty('_sort')) {
            pokemonQuery = pokemonQuery.sort({
                [req.query.column]: req.query.type,
            })
        }

        Promise.all([pokemonQuery, Pokemon.countDocumentsDeleted()])
            .then(([pokemons, deletedCount]) => {
                res.render('user/stored-pokemons', {
                    deletedCount,
                    pokemons: multipleMongooseToObject(pokemons),
                })
            })
            .catch(next)
    }

    // [GET] /trash/pokemons
    showDeletedPokemons(req, res, next) {
        let pokemonQuery = Pokemon.findDeleted()

        if (req.query.hasOwnProperty('_sort')) {
            pokemonQuery = pokemonQuery.sort({
                [req.query.column]: req.query.type,
            })
        }

        pokemonQuery
            .then((deletedPokemons) =>
                res.render('user/deleted-pokemons', {
                    deletedPokemons: multipleMongooseToObject(deletedPokemons),
                })
            )
            .catch(next)
    }
}

module.exports = new UserController()
