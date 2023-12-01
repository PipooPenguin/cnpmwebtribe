const User = require("./user.model")
async function registerUser (cookie, number,email,password){
  user = new User({ token : cookie, number: number,email: email,password:  password})
  await user.save()
}
module.exports={registerUser}