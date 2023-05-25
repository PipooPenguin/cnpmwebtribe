const express = require("express");
// const menu = require("./menu.service");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("OK");
});

module.exports = router;
