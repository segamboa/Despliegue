const { mongoClient } = require("../lib/mongodb.js");
const ObjectId = require("mongodb").ObjectId;
const dbName = process.env.DB_NAME;
const collectionName = "servicios";
const proveedorController = require("../controllers/proveedorController.js");

exports.getServicio = async (req, res) => {
  const id = ObjectId(req.params.id);
  const servicio = await mongoClient
    .db(dbName)
    .collection(collectionName)
    .findOne({ _id: id });
  if (!servicio) {
    res.status(404).send("No se encontroel servicio con el id especificado");
    return;
  }
  res.send(servicio);
};

exports.getServicios = async (req, res) => {
  const servicio = await mongoClient
    .db(dbName)
    .collection(collectionName)
    .find({})
    .toArray();
  //console.log(servicio);
  if (!servicio) {
    res.status(404).send("There are no services");
    return;
  }
  console.log(servicio);
  res.send(servicio);
};

exports.crearServicio = async (req, res) => {
  console.log(req.body.proveedor);
  const provId = ObjectId(req.body.proveedor._id);
  const proveedor = await mongoClient
    .db(dbName)
    .collection(collectionName)
    .find({ _id: provId });
  if (!proveedor) {
    res
      .status(404)
      .send("El proveedor al que quiere asignar el servicio no existe");
  } else {
    console.log("ELSE");
    console.log(proveedor);
    const newServ = req.body;
    const create = await mongoClient
      .db(dbName)
      .collection(collectionName)
      .insertOne(newServ)
      .then((data) => {
        //console.log(data);
        res.status(200).send("Servicio creado");
      })
      .catch((err) => console.log(err));
  }
};

exports.actualizarServicio = async (req, res) => {
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

exports.borrarServicio = async (req, res) => {
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
