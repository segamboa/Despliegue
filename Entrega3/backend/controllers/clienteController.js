const { mongoClient } = require("../lib/mongodb.js");

const dbName = "heaphestus";
const collectionName = "clientes";

exports.getCliente = async (req, res) => {
  const id = req.params.id;
  const cliente = await mongoClient
    .db(dbName)
    .collection(collectionName)
    .findOne({ _id: id });
  if (!cliente) {
    res.status(404).send("No clients with given id found");
    return;
  }
  res.send(cliente);
};

exports.getClientes = async (req, res) => {
  const clientes = await mongoClient
    .db(dbName)
    .collection(collectionName)
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      if (!result) res.status(404).send("No se encontraron clientes");
      res.send(result);
    });
};

exports.crearCliente = async (req, res) => {
  const newCliente = req.body;
  const create = await mongoClient
    .db(dbName)
    .collection(collectionName)
    .insertOne(newCliente)
    .then((data) => {
      //console.log(data);
      res.status(200).send("Cliente creado");
    })
    .catch((err) => console.log(err));
};
