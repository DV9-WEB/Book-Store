// route/userRoute.js
const express = require("express");
const router = express.Router();
const {signup, login} = require("../controller/userController"); // Import the signup controller

// POST route for user signup
router.post("/signup", signup); // Use the signup function as the callback
router.post("/login", login); // Use the signup function as the callback

module.exports = router;
