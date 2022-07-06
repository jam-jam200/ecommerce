const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "",
  auth: {
    user: "",
    pass: "",
  },
});

const mailOptions = {
  from: "",
  to: "",
  subject: "",
  text: "",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
