const nodemailer = require("nodemailer");
require('dotenv').config()

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.nodemailerUser,
    pass: process.env.nodemailerPass
}

});

module.exports = transporter;