const express = require("express");
const router = express.Router();
const clienteController = require("../controllers/clienteController.js");

router.get("/:id", clienteController.getCliente);
router.get("/", clienteController.getClientes);
router.post("/", clienteController.crearCliente);
router.put("/:id", clienteController.actualizarCliente);
router.delete("/:id", clienteController.borrarCliente);
module.exports = router;
