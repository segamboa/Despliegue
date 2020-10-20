const { MongoClient } = require('mongodb')

const uri = 'mongodb://127.0.0.1:27017'

const client = new MongoClient(uri, { useUnifiedTopology: true })
const dbName = 'heaphestus'

module.exports.connectDb = async () => {
  await client.connect()
  await client.db(dbName)
  console.log('Connected siccesfully to the Db!')
}

module.exports.mongoClient = client
