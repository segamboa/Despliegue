const { MongoClient } = require('mongodb')

const uri = process.env.MONGO_URL

const client = new MongoClient(uri, { useUnifiedTopology: true })
const dbName = process.env.DB_NAME

module.exports.connectDb = async () => {
  await client.connect()
  await client.db(dbName)
  console.log('Connected siccesfully to the Db!')
}

module.exports.mongoClient = client
