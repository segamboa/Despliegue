const { mongoClient } = require("../lib/mongodb.js");

const dbName = "heaphestus";
const collectionName = "clientes";

exports.getCliente = async (req, res) => {
  const id = req.params.id;
  const cliente = await mongoClient
    .db(dbName)
    .collection(collectionName)
    .findOne({ _id: id });
  if (!servicio) {
    res.status(404).send("No clients with given id found");
    return;
  }
  res.send(cliente);
};
