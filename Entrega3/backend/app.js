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
app.use(cors());

const contratoProveedorRouter = require("./routes/contratoProveedor.js");
app.use("/api/proveedores/contratos", contratoProveedorRouter);

const proveedoresRouter = require("./routes/proveedor.js");
app.use("/api/proveedores", proveedoresRouter);
app.use(cors());


const servicioRouter = require("./routes/servicio.js");
app.use("/api/servicios", servicioRouter);

const contratoClienteRouter = require("./routes/contratoCliente.js");

const usuariosRouter = require('./routes/usuario.js');
app.use('/api/users', usuariosRouter);

app.use("/api/clientes/contratos",contratoClienteRouter);
connectDb();

module.exports = app;
