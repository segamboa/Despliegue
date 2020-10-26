const express = require("express");
const router = express.Router();
const serviciosController = require("../controllers/servicioController.js");

router.get("/", serviciosController.getServicios);
router.get("/:id", serviciosController.getServicio);
router.post("/", serviciosController.crearServicio);

module.exports = router;
