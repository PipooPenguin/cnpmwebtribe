const express = require("express");
const order = require("./order.service");
const router = express.Router();

router.get("/", (req, res) => {
  order.get();
  res.send("order ok");
});

module.exports = router;
