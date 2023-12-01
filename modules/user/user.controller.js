const express = require("express");
const User = require("./user.service");
const router = express.Router();

router.get("/register", (req, res) => {
  console.log("user.controller GET /register");
  res.render("register.html");
});

router.post("/register", async (req, res) => {
  console.log("user.controller POST /register", req.body);
  const { number, email, password } = req.body;
  const { cookie } = req.cookies;
  await User.registerUser(cookie, number, email, password);
  res.redirect("/");
});

router.get("/login", (req, res) => {
  res.render("login.html");
});
const check = (req, res, next) => {
    if (req.body.password == "minhanh") {
      req.body.password="yêu cầu nhập mật khẩu khác!";
    }
  next();
};
router.post("/login/check", check, (req, res) => {
  console.log("user.controller POST /login/check", req.body);
  res.redirect("/");
});
module.exports = router;
