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
    from: "mihirdesh23@gmail.com", // Replace with your Gmail email address
    to: `${req.params.email}`, // Replace with recipient email address
    subject: "Welcome to FeedNeedy", // Replace with subject of your email
    html: `<h4>Hello ${req.params.name}</h4><p>We would like to inform you that we have got a request for your food ${req.params.food}.
    The Details of the Requestor is as follows: 
    Name : ${req.user.name}
    Mobile : ${req.user.mobile}
    Email : ${req.user.email}</p>`
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
