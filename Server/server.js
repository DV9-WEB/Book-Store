require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bookRoute = require("./route/bookRoute");
const userRoute = require("./route/userRoute");
const courseRoute = require("./route/courseRoute");
const authMiddleware = require("./middleware/authMiddleware")
const app = express();
const PORT = process.env.PORT || 3000;
const DB = process.env.DB;

// Connect to MongoDB
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection Successful");
  })
  .catch((err) => {
    console.log("DB Connection Error:", err);
  });

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173", // Frontend URL
  })
);
app.use(express.json());

// Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/course", authMiddleware, courseRoute); // Use course route here

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
