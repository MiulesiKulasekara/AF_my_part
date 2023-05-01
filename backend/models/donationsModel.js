const mongoose = require("mongoose");

const DonationsSchema = mongoose.Schema({
  donation: {
    food: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    unit: {
      type: String,
      required: true,
    },
    day: {
      type: String,
      required: true,
    },
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Donations", DonationsSchema);
