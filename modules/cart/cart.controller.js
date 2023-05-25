const express = require("express");
// const cart = require("./cart.service");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("cart ok");
});

module.exports = router;
