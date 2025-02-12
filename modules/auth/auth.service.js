const jwt = require('jsonwebtoken')

const verifyUser =  async function () {
    console.log("auth.service verify user ")
    return true;
}
module.exports = {
    verifyUser
}