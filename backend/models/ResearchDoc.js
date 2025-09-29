// const mongoose = require("mongoose");

// const researchDocSchema = new mongoose.Schema(
//   {
//     title: { type: String, required: true },
//     monasteryId: { type: mongoose.Schema.Types.ObjectId, ref: "Monastery", required: true },
//     fileUrl: { type: String, required: true },
//     accessLevel: { type: String, enum: ["public", "researcher"], default: "researcher" }
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("ResearchDoc", researchDocSchema);
const mongoose = require("mongoose");

const researchDocSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    monasteryId: { type: mongoose.Schema.Types.ObjectId, ref: "Monastery", required: true },
    fileUrl: { type: String, required: true, trim: true },
    accessLevel: { 
      type: String, 
      enum: ["public", "researcher"], 
      default: "researcher", 
      lowercase: true 
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("ResearchDocument", researchDocSchema);
