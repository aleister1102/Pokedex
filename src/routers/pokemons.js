const express = require('express')
const router = express.Router()
const pokemonsController = require('../app/controllers/PokemonsController')

router.get('/add', pokemonsController.add)
router.post('/store', pokemonsController.store)
router.get('/:slug', pokemonsController.show)
router.get('/:id/edit', pokemonsController.edit)
router.post('/handle-form-operations', pokemonsController.handleFormOperations)
router.put('/:id', pokemonsController.update)
router.patch('/:id/restore', pokemonsController.restore)
router.delete('/:id', pokemonsController.delete)
router.delete('/:id/force', pokemonsController.forceDelete)

module.exports = router
