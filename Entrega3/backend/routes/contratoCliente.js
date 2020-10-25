const express = require("express");
const router = express.Router();
const contratoClienteController = require('../controllers/contratoClienteController.js');

router.get("/:id",contratoClienteController.getContratosCliente);
module.exports=router;