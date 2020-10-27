const { mongoClient } = require("../lib/mongodb.js");
const ObjectId = require("mongodb").ObjectId;
const dbName = process.env.DB_NAME;
const collectionName = "clientes";

exports.getCliente = async (req, res) => {
  const id = ObjectId(req.params.id);
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
      res.send(data.ops)
    })
    .catch((err) => console.log(err));
};

exports.actualizarCliente = async (req, res) => {
  const id = ObjectId(req.params.id);
  const create = await mongoClient
    .db(dbName)
    .collection(collectionName)
    .updateOne(
      {
        _id: id,
      },
      { $set: req.body }
    )
    .then((data) => {
      if (!data.matchedCount) {
        res.status(404).send("No se encontró cliente con id especificado");
      }
      res.status(200).send("Clente actualizado correctamente");
    })
    .catch((err) => console.log(err));
};

exports.borrarCliente = async (req, res) => {
  const id = ObjectId(req.params.id);
  const borrar = await mongoClient
    .db(dbName)
    .collection(collectionName)
    .deleteOne({ _id: id })
    .then((data) => {
      if (!data.deletedCount) {
        res.status(404).send("No se encontró cliente para borrar");
      }
      res.status(200).send("Cliente eliminado");
    });
};
