const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: ".env" });
function connect() {
  mongoose
    .connect(process.env.MongoDB_URL+process.env.database_name, {})
    .then(() => {
      console.log("connect mongodb success!!");
    })
    .catch((err) => {
      console.log("connect mongodb error!!, url: ",process.env.MongoDB_URL+process.env.database_name);
    });
}

module.exports = { connect };



