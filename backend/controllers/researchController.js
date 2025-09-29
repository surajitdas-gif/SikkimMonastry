// const ResearchDoc = require("../models/ResearchDoc");


// exports.getPublic = async (_req, res) => {
//   const docs = await ResearchDoc.find({ accessLevel: "public" }).populate("monasteryId", "name");
//   res.json(docs);
// };

// exports.getAll = async (_req, res) => {
//   const docs = await ResearchDoc.find().populate("monasteryId", "name");
//   res.json(docs);
// };


// exports.create = async (req, res) => {
//   const { title, monasteryId, fileUrl, accessLevel } = req.body;
//   const doc = await ResearchDoc.create({ title, monasteryId, fileUrl, accessLevel });
//   res.status(201).json(doc);
// };

// /
// exports.remove = async (req, res) => {
//   const del = await ResearchDoc.findByIdAndDelete(req.params.id);
//   if (!del) return res.status(404).json({ message: "Not found" });
//   res.json({ message: "Deleted" });
// };
const ResearchDoc = require("../models/ResearchDocument"); // use corrected model name

// 📂 Public: list public docs
exports.getPublic = async (_req, res) => {
  try {
    const docs = await ResearchDoc.find({ accessLevel: "public" })
      .populate("monasteryId", "name");
    res.json(docs);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// 🔒 Protected (researcher/admin): list all including restricted
exports.getAll = async (_req, res) => {
  try {
    const docs = await ResearchDoc.find()
      .populate("monasteryId", "name");
    res.json(docs);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// 📝 Protected (admin): create doc
exports.create = async (req, res) => {
  try {
    const { title, monasteryId, fileUrl, accessLevel } = req.body;

    if (!title || !monasteryId || !fileUrl) {
      return res.status(400).json({ message: "Title, Monastery ID, and File URL are required" });
    }

    const doc = await ResearchDoc.create({ title, monasteryId, fileUrl, accessLevel });
    res.status(201).json(doc);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// ❌ Protected (admin): delete doc
exports.remove = async (req, res) => {
  try {
    const del = await ResearchDoc.findByIdAndDelete(req.params.id);
    if (!del) return res.status(404).json({ message: "Document not found" });

    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
