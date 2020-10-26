const { mongoClient } = require("../lib/mongodb.js");
const dbName = process.env.DB_NAME;
const collectionName = "empresas";
exports.getEmpresa = async (req, res) => {
  const id = req.params.id;
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
