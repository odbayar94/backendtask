//Standard
const mongoose = require("mongoose");

//My
const config = require("./index");

const connectDB = async () => {
  const conn = await mongoose.connect(
    "mongodb+srv://amazonapi:HkUuBqdNGhk@cluster0.yt2pn.mongodb.net/shortenurl?retryWrites=true&w=majority",
    {
      useNewUrlParse: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }
  );
  console.log(`Conntected : ${conn.connection.host}`);
};

module.exports = connectDB;
