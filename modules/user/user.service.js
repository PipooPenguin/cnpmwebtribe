const User = require('./user.model')
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const handlecreateuser = function (userData) {
    console.log('user service handlecreateuser')
    const {email, password} = userData;
    return jwtToken = generateToken(email,password)

    // Creating the user
    // const user =User.create({ username:"username", password:"ass"});
}
const generateToken = function (email, password) {
    return jwtToken = jwt.sign({ email, password }, process.env.JWT_SECRET, { expiresIn: "1h" });
}
module.exports= {
    handlecreateuser,
}