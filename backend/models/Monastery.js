const mongoose = require("mongoose");

const monasterySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    location: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true }
    },
    history: { type: String, default: "" },
    images: [{ type: String }],
    virtualTourLink: { type: String, default: "" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Monastery", monasterySchema);
