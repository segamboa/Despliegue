const { mongoClient } = require("../lib/mongodb.js");

const dbName = "heaphestus";
const collectionName = "servicios";

exports.getServicio = async (req, res) => {
  const id = req.params.id;
  const servicio = await mongoClient
    .db(dbName)
    .collection(collectionName)
    .findOne({ _id: id });
  if (!servicio) {
    res.status(404).send("No services with given id found");
    return;
  }
  res.send(servicio);
};
