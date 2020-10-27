const express = require("express");
const router = express.Router();
const proveedoresController = require("../controllers/proveedorController.js");

router.get("/:id", proveedoresController.getProveedor);
router.get("/", proveedoresController.getProveedores);
router.post("/", proveedoresController.crearProveedor);
router.put("/:id", proveedoresController.actualizarProveedor);
router.delete("/:id", proveedoresController.borrarProveedor);
module.exports = router;
