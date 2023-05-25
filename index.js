const express = require("express");

const app = express();
const path = require("path");
const ejs = require("ejs");
const mongodb = require("./modules/mongodb/mongodb.service");
const menu = require("./modules/menu/menu.controller");
const category = require("./modules/category/category.controller");

const { engine } = require("express-handlebars");
const methodOverride = require("method-override");

mongodb.connect();

app.engine("html", require("ejs").renderFile);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", menu);
app.post("/test", (req, res) => {
  console.log("req.body", req.body);
  res.send("test ok");
});

app.use("/category", category);

app.listen(3000, (req, res) => {
  console.log("App is listening on port 3000");
});