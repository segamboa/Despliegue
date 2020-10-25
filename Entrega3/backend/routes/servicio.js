const express = require("express");
const router = express.Router();
const serviciosController = require("../controllers/servicioController.js");

router.get("/", serviciosController.getServicios);

module.exports = router;
