const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URL;
console.log(uri);
const client = new MongoClient(uri, { useUnifiedTopology: true });
const dbName = process.env.DB_NAME;

module.exports.connectDb = async () => {
  await client.connect();
  await client.db(dbName);
  console.log("Connected succesfully to the Db!");
};

module.exports.mongoClient = client;
