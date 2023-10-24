const express = require('express')

const {
    getCountry
} = require('../controller/countryController')

const router = express.Router()

//GET a country
router.get('/', getCountry)

module.exports = router