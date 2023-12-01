const express = require("express");
const router = express.Router();
const search = require("./search.service");
router.get("/", (req, res) => {
  console.log("search.controller GET /");
  res.render("search.html");
});
router.post("/answer", async(req, res) => {
  console.log("search.controller POST /answer",req.body);
  const answer= await search.findAnswer(req.body);
  res.send("hello");
});
module.exports = router;
