const express = require('express')
const router = express.Router()
const proveedoresController = require('../controllers/proveedorController.js')

router
  .get('/:id', proveedoresController.getProveedor)

module.exports = router
