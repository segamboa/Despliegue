const express = require('express')
const router = express.Router()
const ususarioController = require('../controllers/userController.js')

router
  .get('/', ususarioController.getUsuarios)
  .post('/', ususarioController.createUsuario)
  .get('/:id', ususarioController.getUsuario)
  .put('/:id', ususarioController.updateUsuario)
  .delete('/:id', ususarioController.deleteUsuario)

module.exports = router
