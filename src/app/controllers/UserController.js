const Pokemon = require('../models/Pokemon')
const {
    multipleMongooseToObject,
    mongooseToObject,
} = require('../../utils/mongoose')

class UserController {
    // [GET] /stored/pokemons
    showPokemons(req, res, next) {
        Pokemon.find({})
            .then((pokemons) =>
                res.render('user/stored-pokemons', {
                    pokemons: multipleMongooseToObject(pokemons),
                })
            )
            .catch(next)
    }
}

module.exports = new UserController()
