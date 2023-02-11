const express = require('express')
const router = express.Router()
const userController = require('../app/controllers/UserController')

router.get('/stored/pokemons', userController.showPokemons)
router.get('/trash/pokemons', userController.showDeletedPokemons)

module.exports = router
