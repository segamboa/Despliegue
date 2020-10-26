const express = require("express");
const router = express.Router();
const serviciosContratados = require("../controllers/serviciosContratadosController.js");

router.get("/:id", serviciosContratados.getServiciosContratadosEmpresa);
router.get("/", serviciosContratados.getServiciosContratados);
module.exports = router;
