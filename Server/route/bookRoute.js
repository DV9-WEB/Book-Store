const express = require("express")
const router = express.Router()
const getBook  = require("../controller/bookController")

router.get("/", getBook)

module.exports = router