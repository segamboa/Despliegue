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
