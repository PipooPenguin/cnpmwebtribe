const express = require('express');
const router = express.Router();
const user = require('./user.service')
const {UserVerify} = require('../auth/auth.controller')

router.get("/signup",(req,res) => {
    console.log("user controller get /signup")
    res.render("register.html");
});

router.post("/handlesignup", async (req,res) => {
    // const {username, email, password} = req.body;
    const userData = req.body;
    const result = await user.handlecreateuser(req.body);
    const token = await user.generateToken(userData.username);
    console.log("user controller handlesignup token:",token);
    res.json({token})
})

router.get("/login",(req,res) => {
    console.log("user controller get /login")
    res.render("login.html");
})

router.get('/profile',UserVerify, (req,res) => {
    res.render('profile.html')
} )

router.post("/handlelogin",async (req,res) => {
    const result = await user.verifyUser(req.body);
    // console.log("user controller post handlelogin result: ", result)
    const token = user.generateToken(req.body.username)
    res.json({token})
})
module.exports = router;