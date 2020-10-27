const express = require("express");
const router = express.Router();
const serviciosContratados = require("../controllers/serviciosContratadosController.js");

router.get(
  "/proveedor/:id",
  serviciosContratados.getServiciosContratadosProveedor
);
router.get(
  "/cliente/:id/contrato/:idContrato",
  serviciosContratados.getContrato
);
router.get("/cliente/:id", serviciosContratados.getContratosCliente);
router.get("/", serviciosContratados.getServiciosContratados);
router.post("/", serviciosContratados.postContrato);
module.exports = router;
