const auth = require("./auth.service")
function UserVerify (req, res, next) {
    const result = auth.verifyUser();
    if (result) {next()}
    console.log("auth.controller.userVerify sucess");
}
module.exports={UserVerify};