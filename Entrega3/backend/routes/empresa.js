const express = require('express')
const router = express.Router()
const empresasController = require('../controllers/empresaController.js')

router.get('/:id', empresasController.getEmpresa)

module.exports = router
