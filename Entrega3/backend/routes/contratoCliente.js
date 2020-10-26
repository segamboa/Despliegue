const express = require("express");
const router = express.Router();
const contratoClienteController = require('../controllers/contratoClienteController.js');

router.get("/:id",contratoClienteController.getContratosCliente);
router.get("/:id/:idContrato",contratoClienteController.getContrato);
router.post("/",contratoClienteController.postContrato);
router.put("/:id/:idContrato",contratoClienteController.putContrato);

module.exports=router;