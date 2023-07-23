const mongoose = require("mongoose");

const connect = async () => {
  await mongoose.connect(
    "mongodb+srv://souravp:asitavsarkar@cluster0.tgfuk7z.mongodb.net/"
  );
};

module.exports = { connect };
