const User = require('./user.model')
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const user = require('./user.model');
const bcrypt = require('bcrypt')
dotenv.config();

const handlecreateuser = async function (userData) {
    try {
        console.log('user service handlecreateuser')
        const {email, password} = userData;
        // Creating the user
        const result =await User.create({ username:email,password:password});

        return result;
    }
    catch(err) {
        console.log("failed to create user", err);
    }
    return 0;

}
const generateToken = function (email) {
    return jwtToken = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });
}

const verifyUser = async function ({email,password}) {
    const username = email;
    // console.log('user service verifyUser, username: ',username," password: ",password)
    const user = await User.findOne({'username':username});
    console.log('user service verifyUser, result.password: ',user.password);
    const comparePassword = await bcrypt.compare(password,user.password);
    // console.log('user service verifyUser, comparePassword: ',comparePassword);
    return comparePassword;
}

module.exports= {
    handlecreateuser,
    generateToken,
    verifyUser,
}