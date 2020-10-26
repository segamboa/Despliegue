const express = require("express");
const router = express.Router();
const serviciosContratados = require("../controllers/serviciosContratadosController.js");

router.get("/:id", serviciosContratados.getServiciosContratadosEmpresa);
router.get("/", serviciosContratados.getServiciosContratados);
router.post("/", serviciosContratados.postContrato);
router.get("/:id",serviciosContratados.getContratosCliente);
router.get("/:id/:idContrato",serviciosContratados.getContrato);
router.put("/:id/:idContrato",serviciosContratados.putContrato);

module.exports = router;
