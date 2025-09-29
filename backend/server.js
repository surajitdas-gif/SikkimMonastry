// =======================
// Load environment variables
require("dotenv").config({ path: ".env" });       // main .env
require("dotenv").config({ path: ".env.gemini" }); // Gemini API keys

// =======================
// Imports
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

// Gemini AI
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// MongoDB + routes
const connectDB = require("./config/db"); 
const authRoutes = require("./routes/authRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

// =======================
// App setup
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: process.env.FRONTEND_URL || "*", credentials: true }));
app.use(express.static(path.join(__dirname, "./public")));

// =======================
// Monasteries dataset
const monasteries = [
  { name: "Rumtek Monastery", description: "One of the most famous monasteries in Sikkim, seat of the Karmapa.", images: ["rumtek1.webp", "rumtek2.jpg", "rumtek3.jpg"] },
  { name: "Pemayangtse Monastery", description: "A historic monastery located in West Sikkim.", images: ["pemayangtse2.jpg","pemayangtse3.jpg"] },
  { name: "Ralong Monastery", description: "Known for its stunning architecture and religious significance.", images: ["ralang1.jpg","ralang3.jpg"] },
  { name: "Enchey Monastery", description: "Located near Gangtok, important to the Nyingma sect.", images: ["enchey1.jpg","enchey2.jpg"] },
  { name: "Tashiding Monastery", description: "Situated in West Sikkim, known for its annual Bumchu festival.", images: ["tashiding1.jpg","tashiding2.jpg"] }
];

// =======================
// AI search route
app.get("/monasteries/search", async (req, res) => {
  const q = req.query.q?.trim();
  if (!q) return res.json({ answer: "Please enter a query." });

  try {
    // Prepare context for AI
    const context = monasteries.map(m => `${m.name}: ${m.description}`).join("\n\n");

    // Call Gemini AI
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const response = await model.generateContent(
      `You are an expert on Sikkim monasteries. Dataset:\n${context}\n\nQuestion: ${q}`
    );

    const aiAnswer = response.response.text();

    if (aiAnswer && aiAnswer.trim() !== "") {
      return res.json({ answer: aiAnswer });
    }

    throw new Error("Empty AI response");

  } catch (err) {
    console.error("Gemini AI failed, using fallback:", err.message);

    // Fallback search
    const results = monasteries.filter(
      m => m.name.toLowerCase().includes(q.toLowerCase()) ||
           m.description.toLowerCase().includes(q.toLowerCase())
    );

    if (results.length === 0) return res.json({ answer: "No matching monastery found." });

    const match = results[0];
    res.json({
      answer: `${match.name}: ${match.description}`,
      images: match.images.map(img => `/images/${img}`)
    });
  }
});

// =======================
// API routes
app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);

// Root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/login.html"));
});

// =======================
// Connect to MongoDB
connectDB();

// =======================
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT} | Gemini Key loaded: ${!!process.env.GEMINI_API_KEY}`)
);
