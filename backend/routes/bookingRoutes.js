const express = require("express");
const router = express.Router();

const { createBooking, getBookings } = require("../controllers/bookingController");

// POST a new booking
router.post("/", createBooking);

// GET all bookings
router.get("/", getBookings);

module.exports = router;
