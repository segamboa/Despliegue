const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const app = express();
const { connectDb } = require("./lib/mongodb");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())

const proveedoresRouter = require('./routes/proveedor.js');
app.use('/api/proveedores', proveedoresRouter);
app.use(cors());

const contratoProveedorRouter = require("./routes/contratoProveedor.js");
const contratoClienteRouter = require("./routes/contratoCliente.js");

app.use("/api/empresas", empresasRouter);
app.use("/api/empresas/contratos", contratoProveedorRouter);
app.use("/api/clientes/contratos",contratoClienteRouter);
connectDb();

module.exports = app;
