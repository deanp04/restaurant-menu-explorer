const express = require('express')
const router = express.Router()
// add controllers

// const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', indexController.getHome)
router.post('/q', indexController.getSearch)

module.exports = router