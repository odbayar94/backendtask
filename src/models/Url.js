const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema({
  shortenUri: {
    type: String,
    required: [true, "Please Inter shorten"]
  },
  url: {
    type: String,
    required: [true, "Please Inter URL"]
  }
});

module.exports = mongoose.model("Url", UrlSchema);
