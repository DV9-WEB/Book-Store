const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

// Protect the course route
router.get("/courses", authMiddleware, (req, res) => {
  res.json({ message: "Welcome to the course content!" });
});

module.exports = router;
