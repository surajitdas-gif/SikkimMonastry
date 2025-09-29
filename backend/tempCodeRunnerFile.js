require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");


const connectDB = require("./config/db"); // MongoDB connection
const authRoutes = require("./routes/authRoutes"); // Auth routes
const bookingRoutes = require("./routes/bookingRoutes"); // Booking routes (fix path/casing)

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// Serve static files
app.use(express.static(path.join(__dirname, "./public")));

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);

// Root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/login.html"));
});

// Connect to MongoDB
connectDB();

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
