const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: "../config.env" });
const AppError = require("./utils/appError");
const app = express();
require('dotenv').config();
const nodemailer = require('nodemailer');


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/", express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));

const homeRoute = require("./routes/app.routes");
app.use("/", homeRoute);

const port = 3000;

const server = app.listen(port, () => {
  console.log("server is running on localhost " + port);
});
