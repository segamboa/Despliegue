const { mongoClient } = require("../lib/mongodb.js");
const servicioController = require("./servicioController.js");

const dbName = "heaphestus";
const collectionName = "serviciosContratados";
exports.getServiciosEmpresa = async (req, res) => {
  const idEmpresa = req.params.id;
  const empresa = await mongoClient
    .db(dbName)
    .collection(collectionName)
    .findOne({ _id: id });
  if (!empresa) {
    res.status(404).send("no empresas with the given id");
    return;
  }
  res.send(empresa);
};
