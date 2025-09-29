const router = require("express").Router();
const ctrl = require("../controllers1/monasteryController");
const { requireAuth, authorize } = require("../middleware/authMiddleware");

// Public
router.get("/", ctrl.getAll);
router.get("/:id", ctrl.getById);

// Admin only
router.post("/", requireAuth, authorize("admin"), ctrl.create);
router.put("/:id", requireAuth, authorize("admin"), ctrl.update);
router.delete("/:id", requireAuth, authorize("admin"), ctrl.remove);

module.exports = router;
