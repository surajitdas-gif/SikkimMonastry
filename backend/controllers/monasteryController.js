const Monastery = require("../models/Monastery");

// Public: list all monasteries
exports.getAll = async (_req, res) => {
  const list = await Monastery.find().sort({ createdAt: -1 });
  res.json(list);
};

// Public: get by id
exports.getById = async (req, res) => {
  const item = await Monastery.findById(req.params.id);
  if (!item) return res.status(404).json({ message: "Not found" });
  res.json(item);
};

// Admin: create
exports.create = async (req, res) => {
  const { name, location, history, images, virtualTourLink } = req.body;
  const created = await Monastery.create({ name, location, history, images, virtualTourLink });
  res.status(201).json(created);
};

// Admin: update
exports.update = async (req, res) => {
  const updated = await Monastery.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) return res.status(404).json({ message: "Not found" });
  res.json(updated);
};

// Admin: delete
exports.remove = async (req, res) => {
  const deleted = await Monastery.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ message: "Not found" });
  res.json({ message: "Deleted" });
};
