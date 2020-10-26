const { mongoClient } = require("../lib/mongodb.js");
const servicioController = require("./servicioController.js");

const dbName = "heaphestus";
const collectionName = "serviciosContratados";
exports.getServiciosContratadosEmpresa = async (req, res) => {
  const idEmpresa = req.params.id;
  const allDocs = await mongoClient
    .db(dbName)
    .collection(collectionName)
    .find({ "servicio.proveedor._id": idEmpresa })
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

exports.crearServiciosContratados = async (req, res) => {
  const newServicioContratado = req.body;
  const create = await mongoClient
    .db(dbName)
    .collection(collectionName)
    .insertOne(newServicioContratado)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
};
