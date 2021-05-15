const express = require("express");
const legendRoute = require("./legends.js");
const router = express.Router()

router.use("/legends", legendRoute)

module.exports = router;