const express = require("express");
const mongoose = require("mongoose");
const app = express();
const { database, ServerConfig } = require("./config");
const passport = require("passport");
const router = require("./routes");
const passportAuth = require("./middlewares/jwt-middleware");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
//passport-jwt


passportAuth(passport);
app.use("/api", router);

app.listen(ServerConfig.PORT, async () => {
  console.log(`Succesfully started the server on port: ${ServerConfig.PORT}`);
  database.connect();
  console.log("Mongo DB connected");
});
