const { mongoClient } = require('../lib/mongodb.js')
const ObjectId = require('mongodb').ObjectId

const dbName = process.env.DB_NAME
const collectionName = 'users'

exports.login = async (req, res) => {
  const user = await mongoClient.db(dbName).collection(collectionName).findOne({username: req.body.username})
  if(!user){
    res.status(401).send('Incorrect  credentials')
    return
  }
  if(user.password !== req.body.password){
    res.status(401).send('Incorrect  credentials')
    return
  }
  res.send({id: user._id, auth: true, role: user.role})
}

