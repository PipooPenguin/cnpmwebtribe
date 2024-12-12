const express = require("express");
const app = express();
const path = require("path");
const ejs = require("ejs");
const mongodb = require("./modules/mongodb/mongodb.service");
const menu = require("./modules/menu/menu.controller");
const category = require("./modules/category/category.controller");
const user = require("./modules/user/user.controller");
const cart = require("./modules/cart/cart.controller");
const checkout = require("./modules/checkout/checkout.controller");
const staticpage = require("./modules/staticpage/staticfile.controller");
const search = require("./modules/search/search.controller");
const {errorHandler,errorMongoose} = require("./modules/error/error.controller");

const { engine } = require("express-handlebars");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");


mongodb.connect();

app.engine("html", require("ejs").renderFile);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", staticpage);
app.use("/menu", menu);
app.use("/category", category);
app.use("/user", user);
app.use("/cart", cart);
app.use("/checkout", checkout);
app.use("/search", search);
app.use("/user", user);

app.use(errorMongoose,errorHandler)


app.listen(3000, (req, res) => {
  console.log("App is listening on port 3000");
});
