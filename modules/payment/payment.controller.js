const express = require("express");
const payment = require("./payment.service");
const router = express.Router();

router.get("/", (req, res) => {
  payment.get();
  res.send("payment ok");
});

module.exports = router;
