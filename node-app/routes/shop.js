const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("Welcome home");
  res.send("Welcome home");
});

module.exports = router;
