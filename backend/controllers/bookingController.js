
const Booking = require("../models/Booking"); // Ensure capitalization matches 

// Create a new booking
exports.createBooking = async (req, res) => {
  const { monastery, date, members, email, phone } = req.body;

  if (!monastery || !date || !members || !email || !phone) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const booking = await Booking.create({ monastery, date, members, email, phone });
    res.status(201).json({ message: "Booking confirmed", booking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};

// Get all bookings
exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};

