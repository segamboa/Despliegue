const express = require("express");
const router = express.Router();
const serviciosController = require("../controllers/servicioController.js");

router.get("/", serviciosController.getServicios);
router.get("/:id", serviciosController.getServicio);
router.post("/", serviciosController.crearServicio);
router.put("/:id", serviciosController.actualizarServicio);
router.delete("/:id", serviciosController.borrarServicio);

module.exports = router;
