const Pokemon = require('../models/Pokemon')

class SiteController {
    // [GET] /
    index(req, res) {
        Pokemon.find({}, function (err, pokemons) {
            if (!err) res.json(pokemons)
            else res.status(400).json({ error: 'message' })
        })
    }

    // [GET] /search
    search(req, res) {
        res.render('search')
    }
}

module.exports = new SiteController()
