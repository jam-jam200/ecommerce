const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: "../config.env" });
const AppError = require("./utils/appError");
const app = express();
require("dotenv").config();
const nodemailer = require("nodemailer");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/", express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.post("/contact-us", (req, res) => {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "jessieoyaks4j@gmail.com",
      password: "jessica4j2852003.",
    },
  });

  const mailOptions = {
    from: req.body.email,
    to: "jessieoyaks4j@gmail.com",
    subject: `Message from ${req.body.email}: ${req.body.subject}`,
    // telephone: req.body.phone,
    text: req.body.message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error");
    } else {
      console.log("Email sent: " + info.response);
      res.send("success")
    }
  });
});
const homeRoute = require("./routes/app.routes");
app.use("/", homeRoute);

const port = 3000;

const server = app.listen(port, () => {
  console.log("server is running on localhost " + port);
});
