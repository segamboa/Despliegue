const { mongoClient } = require('../lib/mongodb.js')

const dbName = process.env.DB_NAME
const collectionName = 'proveedores'

exports.getProveedor = async (req, res) => {
  const id = req.params.id
  const proveedor = await mongoClient.db(dbName).collection(collectionName).findOne({ _id: id })
  if (!proveedor) {
    res.status(404).send('no proveedor  with the given id')
    return
  }
  res.send(proveedor)
}
