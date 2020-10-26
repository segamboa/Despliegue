const { mongoClient } = require("../lib/mongodb.js");
const servicioController = require("./servicioController.js");
const ObjectId = require("mongodb").ObjectId;
const dbName = process.env.DB_NAME;
const collectionName = "serviciosContratados";
/*EMPRESA*/
exports.getServiciosContratadosProveedor = async (req, res) => {
  const idProveedor = ObjectId(req.params.id);
  const allDocs = await mongoClient
    .db(dbName)
    .collection(collectionName)
    .find({ "servicio.proveedor._id": idProveedor })
    .toArray(function (err, result) {
      if (err) throw err;
      res.send(result);
    });
};

exports.getServiciosContratados = async (req, res) => {
  const allDocs = await mongoClient
    .db(dbName)
    .collection(collectionName)
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.send(result);
    });
};
/* CLIENTES*/
exports.getContratosCliente = async (req, res) => {
  const idCliente = ObjectId(req.params.id);
  const contratos = await mongoClient
    .db(dbName)
    .collection(collectionName)
    .find({ "cliente._id": idCliente })
    .toArray();
  if (!contratos) {
    res.status(404).send("no contratos with the given client id");
    return;
  }
  console.log(contratos.length);
  res.send(contratos);
};
exports.getContrato = async (req, res) => {
  const idCliente = ObjectId(req.params.id);
  const idContrato = ObjectId(req.params.idContrato);
  const contratos = await mongoClient
    .db(dbName)
    .collection(collectionName)
    .find({ _id: idContrato, "cliente._id": idCliente })
    .toArray();
  if (!contratos) {
    res.status(404).send("no contratos with the given client id");
    return;
  }
  console.log(contratos.length);
  res.send(contratos);
};
exports.postContrato = async (req, res) => {
  //tomo el servicio de la carta que ya tiene asignado un proveedor, eel cliente es el mismo de la seccion
  let contrato = {
    servicio: req.body.servicio,
    cliente: req.body.cliente,
    precio_pactado: "",
    fecha_contrato: "",
    calificacion: 0,
  };
  contrato.servicio._id = ObjectId(contrato.servicio._id);
  contrato.servicio.proveedor._id = ObjectId(contrato.servicio.proveedor._id);
  contrato.cliente._id = ObjectId(contrato.cliente._id);
  const contratos = await mongoClient
    .db(dbName)
    .collection(collectionName)
    .insertOne(contrato);
  res.send(contratos.ops[0]);
};
exports.putContrato = async (req, res) => {
  const idCliente = ObjectId(req.params.id);
  const idContrato = ObjectId(req.params.idContrato);
  let contrato = {
    servicio: req.body.servicio,
    cliente: req.body.cliente,
  };
  conn.then((client) => {
    mongoClient
      .db(dbName)
      .collection(collectionName)
      .updateOne(
        { _id: idContrato, "cliente._id": idCliente },
        { $set: { servicio: contrato.servicio, cliente: contrato.cliente } }
      );
  });
};
