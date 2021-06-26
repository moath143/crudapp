const mongoose = require("mongoose");
require("dotenv").config({ path: "./.env" });
const uri = process.env.DATABASE_URI;

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

const dbobject = mongoose.connection;

dbobject.on("connected", () => {
  console.log("the mongodb connection successfull");
});

dbobject.on("error", () => {
  console.log("the mongodb connection failed");
});

module.exports = mongoose;
