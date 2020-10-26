const express = require("express");
const router = express.Router();
const serviciosContratados = require("../controllers/serviciosContratadosController.js");

router.get(
  "/proveedor/:id",
  serviciosContratados.getServiciosContratadosProveedor
);
router.get("/cliente/:id", serviciosContratados.getContratosCliente);
router.get("/", serviciosContratados.getServiciosContratados);
router.get("/:id/:idContrato", serviciosContratados.getContrato);
router.post("/", serviciosContratados.postContrato);
router.put("/:id/:idContrato", serviciosContratados.putContrato);

module.exports = router;
