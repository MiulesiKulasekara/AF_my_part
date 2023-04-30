const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.URL, {
  useNewUrlParser: true,
});

module.exports = connection = mongoose.connection;

