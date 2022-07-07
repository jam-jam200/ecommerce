const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "jessieoyaks4j@gmail.com",
    pass: "jessica4j2852003.",
  },
});

const mailOptions = {
  from: "jessieoyaks4j@gmail.com",
  to: "jessicaoyakhilome@gmail.com",
  subject: "testing",
  text: "heeeeelooo",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
