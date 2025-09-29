
const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    monastery: { type: String, required: true },
    date: { type: Date, required: true },
    members: { type: Number, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
