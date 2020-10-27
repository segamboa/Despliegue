const { mongoClient } = require("../lib/mongodb.js");
const ObjectId = require("mongodb").ObjectId;

const dbName = process.env.DB_NAME;
const collectionName = "proveedores";

exports.getProveedor = async (req, res) => {
  const id = ObjectId(req.params.id);
  const proveedor = await mongoClient
    .db(dbName)
    .collection(collectionName)
    .findOne({ _id: id });
  if (!proveedor) {
    res.status(404).send("no proveedor  with the given id");
    return;
  }
  res.send(proveedor);
};

exports.getProveedores = async (req, res) => {
  const proveedores = await mongoClient
    .db(dbName)
    .collection(collectionName)
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      if (!result) res.status(404).send("No se encontraron proveedores");
      res.send(result);
    });
};

exports.crearProveedor = async (req, res) => {
  const newProv = req.body;
  const create = await mongoClient
    .db(dbName)
    .collection(collectionName)
    .insertOne(newProv)
    .then((data) => {
      res.status(200).send("creado");  
    })
    .catch((err) => console.log(err));
};

exports.actualizarProveedor = async (req, res) => {
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
        res.status(404).send("No se encontró proveedor con id especificado");
      }
      res.status(200).send("Proveedor actualizado correctamente");
    })
    .catch((err) => console.log(err));
};

exports.borrarProveedor = async (req, res) => {
  const id = ObjectId(req.params.id);
  const borrar = await mongoClient
    .db(dbName)
    .collection(collectionName)
    .deleteOne({ _id: id })
    .then((data) => {
      if (!data.deletedCount) {
        res.status(404).send("No se encontró proveedor para borrar");
      }
      res.status(200).send("Proveedor eliminado");
    });
};
