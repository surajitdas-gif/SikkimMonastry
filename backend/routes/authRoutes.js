

const express = require("express");
const router = express.Router();

// Fixed path to controller
const { register, login, logout, me } = require("../controllers/authController");
const authMiddleware = require("../middleware/auth");

// Auth routes
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/me", authMiddleware, me);

module.exports = router;
