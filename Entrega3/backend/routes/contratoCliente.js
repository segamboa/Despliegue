const express = require("express");
const router = express.Router();
const contratoClienteController = require('../controllers/contratoClienteController.js');

router.get("/:id",contratoClienteController.getContratosCliente);
router.get("/:id/:idContrato",contratoClienteController.getContrato);
router.get("/:id",contratoClienteController.postContrato);
module.exports=router;