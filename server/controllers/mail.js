require("dotenv").config();
const nodemailer = require("nodemailer");
// const Mailgen = require("mailgen");

exports.sendMail = (req, res) => {
  // Create a transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_ID, // Replace with your Gmail email address
      pass: process.env.PASS, // Replace with your Gmail email password
    },
  });

  // Define the email options
  const mailOptions = {
    from: "piyush.agarwal24.pa@gmail.com", // Replace with your Gmail email address
    to: `${req.body.email}`, // Replace with recipient email address
    subject: "Welcome to FeedNeedy", // Replace with subject of your email
    html: `<h4>Hello ${req.body.name}</h4><p>We are pleased to have you become a part of our family. Join us in bringing a smile to the faces of the underpriviled by active donation of food items.</p>`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(400).json({ Error: error });
    } else {
      res.status(200).json({ "Email sent successfully": info.response });
    }
  });
};
