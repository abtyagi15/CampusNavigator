const nodemailer = require("nodemailer");
require("dotenv").config();

const mailSender = async (email, title, body) => {
  try {
    // const testAccount = nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
      host: process.env.HOST_MAILER,
      port: 465,
      secure: true,
      auth: {
        user: process.env.AUTH_USER,
        pass: process.env.AUTH_PASS,
      },
    });

    let info = await transporter.sendMail({
      from: "ABTYAGI",
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`,
    });

    console.log(info);
    return info;
  } catch (e) {
    console.error(e);
    console.log("Error in mail sender");
  }
};

module.exports = mailSender;
