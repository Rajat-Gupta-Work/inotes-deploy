const mongoose = require("mongoose");

const mongoURI = "mongodb://rajatgupta030302:JUbQFc3tzGUYWixb@ac-sivsztw-shard-00-00.nnsxwtc.mongodb.net:27017,ac-sivsztw-shard-00-01.nnsxwtc.mongodb.net:27017,ac-sivsztw-shard-00-02.nnsxwtc.mongodb.net:27017/?replicaSet=atlas-57wq74-shard-0&ssl=true&authSource=admin";

async function connectToMongo() {
  await mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to Mongo Successfully"))
    .catch((err) => console.log(err));
}

module.exports = connectToMongo;
