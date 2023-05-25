const express = require("express");
const user = require("./user.service");
const router = express.Router();

router.get("/", (req, res) => {
  user.get();
  res.send("OK");
});

module.exports = router;
