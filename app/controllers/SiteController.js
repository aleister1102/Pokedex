const Pokemon = require('../models/Pokemon')
const { multipleMongooseToObject } = require('../../utils/mongoose')

class SiteController {
    // [GET] /
    show(req, res, next) {
        Pokemon.find({})
            .then((pokemons) => {
                res.render('home', {
                    pokemons: multipleMongooseToObject(pokemons),
                })
            })
            .catch(next)
    }
}

module.exports = new SiteController()
