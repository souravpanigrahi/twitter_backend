const express = require("express");
const mongoose = require("mongoose");
const app = express();
const { database, ServerConfig } = require("./config");

const router = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);




app.listen(ServerConfig.PORT, async () => {
  console.log(`Succesfully started the server on port: ${ServerConfig.PORT}`);
  database.connect();
  console.log("Mongo DB connected");
});
