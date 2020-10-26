const { mongoClient } = require("../lib/mongodb.js");
const dbName = "heaphestus";
const collectionName = "servicioContratado";
exports.getContratosCliente = async (req, res) => {
  const id = req.params.id;
  const contratos = await mongoClient
    .db(dbName)
    .collection(collectionName)
    .find({ "cliente._id": id })
    .toArray();
  if (!contratos) {
    res.status(404).send("no contratos with the given client id");
    return;
  }
  res.send(contratos);
};
