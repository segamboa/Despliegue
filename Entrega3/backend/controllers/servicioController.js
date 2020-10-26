const { mongoClient } = require("../lib/mongodb.js");

const dbName = "heaphestus";
const collectionName = "servicios";

exports.getServicio = async (req, res) => {
  const id = req.params.id;
  const servicio = await mongoClient
    .db(dbName)
    .collection(collectionName)
    .findOne({ _id: id });
  if (!servicio) {
    res.status(404).send("No services with given id found");
    return;
  }
  res.send(servicio);
};

exports.getServicios = async(req, res)=> {
  const servicio = await mongoClient
    .db(dbName)
    .collection(collectionName)
    .find({})
    .toArray();
    //console.log(servicio);
    if(!servicio){
      res.status(404).send("There are no services");
      return;
    }
    //console.log(servicio);  
    res.send(servicio);
    
}