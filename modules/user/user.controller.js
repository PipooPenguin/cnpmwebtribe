const express = require('express');
const router = express.Router();
const user = require('./user.service')

router.get("/register",(req,res) => {
    console.log("user controller get /register")
    res.render("register.html");
});

router.post("/handlecreateuser", async (req,res) => {
    // const {username, email, password} = req.body;
    const userData = req.body;
    const registerUser = await user.handlecreateuser(req.body);
    console.log("user controller post TOKEN:",registerUser)
    res.json(registerUser);
})

module.exports = router;