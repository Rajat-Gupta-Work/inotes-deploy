const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://rajat:rajat@cluster0.hqjhecx.mongodb.net/inotes";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully");
  } catch (err) {
    console.error("Failed to connect to Mongo", err);
  }
};

module.exports = connectToMongo;
