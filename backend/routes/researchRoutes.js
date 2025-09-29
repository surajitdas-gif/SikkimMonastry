// const router = require("express").Router();
// const ctrl = require("../controllers1/researchController");
// const { requireAuth, authorize } = require("../middleware/authMiddleware");

// // Public endpoint (for public docs)
// router.get("/public", ctrl.getPublic);

// // Researcher/Admin protected endpoint (your frontend currently calls /research)
// router.get("/", requireAuth, authorize("researcher", "admin"), ctrl.getAll);

// // Admin manage
// router.post("/", requireAuth, authorize("admin"), ctrl.create);
// router.delete("/:id", requireAuth, authorize("admin"), ctrl.remove);

// module.exports = router;
const router = require("express").Router();
const ctrl = require("../controllers/researchDocController"); // ✅ corrected path & name
const { requireAuth, authorize } = require("../middleware/authMiddleware");

// 📂 Public endpoint (for public docs)
router.get("/public", ctrl.getPublic);

// 🔒 Researcher/Admin protected endpoint (list all docs)
router.get("/", requireAuth, authorize("researcher", "admin"), ctrl.getAll);

// 📝 Admin: create new research doc
router.post("/", requireAuth, authorize("admin"), ctrl.create);

// ❌ Admin: delete a research doc
router.delete("/:id", requireAuth, authorize("admin"), ctrl.remove);

module.exports = router;
