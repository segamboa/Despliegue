const { mongoClient } = require('../lib/mongodb.js')
const ObjectId = require('mongodb').ObjectId

const dbName = process.env.DB_NAME
const collectionName = 'users'

exports.getUsuarios = async (req, res) => {
  const users = await mongoClient.db(dbName).collection(collectionName).find().toArray()
  res.send(users)
}

exports.createUsuario = async (req, res) => {
  const result = await mongoClient.db(dbName).collection(collectionName).insertOne(req.body)
  res.send(result.ops)
}

exports.getUsuario = async (req, res) => {
  const id = ObjectId(req.params.id)
  const usuario = await mongoClient.db(dbName).collection(collectionName).findOne({ _id: id })
  if (!usuario) {
    res.status(404).send('No user with the given id')
    return
  }
  res.send(usuario)
}

exports.updateUsuario = async (req, res) => {
  const id = ObjectId(req.params.id)
  const result = await mongoClient.db(dbName).collection(collectionName).updateOne({ _id: id }, { $set: req.body })

  if (!result.matchedCount) {
    res.status(404).send('No user with the given id')
    return
  }
  res.send(result)
}

exports.deleteUsuario = async (req, res) => {
  const id = ObjectId(req.params.id)
  const result = await mongoClient.db(dbName).collection(collectionName).deleteOne({ _id: id })
  if (!result.result.n) {
    res.status(404).send('No user with the given id')
    return
  }
  res.send(result)
}
