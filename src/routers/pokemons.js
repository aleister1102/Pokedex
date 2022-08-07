const express = require('express')
const router = express.Router()
const pokemonsController = require('../app/controllers/PokemonsController')

router.get('/add', pokemonsController.add)
router.post('/store', pokemonsController.store)
router.get('/:slug', pokemonsController.show)
router.get('/:id/edit', pokemonsController.edit)
router.put('/:id', pokemonsController.update)
router.delete('/:id', pokemonsController.delete)
router.get('/', pokemonsController.index)

module.exports = router
