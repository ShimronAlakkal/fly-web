const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/contact.html", (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: req.body.emaily,
    to: process.env.EMAIL,
    subject: `Message from ${req.body.emaily}: ${req.body.subject}`,
    text: `From: ${req.body.fname} ${req.body.lname}\nMessage:\n${req.body.message}`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error");
    } else {
      console.log("Email sent: " + info.response);
      res.send("success");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});