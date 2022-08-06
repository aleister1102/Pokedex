const express = require('express')
const router = express.Router()
const pokemonsController = require('../app/controllers/PokemonsController')

router.get('/:slug', pokemonsController.show)
router.get('/', pokemonsController.index)

module.exports = router
