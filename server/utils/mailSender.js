const nodemailer = require("nodemailer");

const mailSennder = async (email, title, body) => {
  try {
    const testAccount = nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
      host: "smtp.forwardemail.net",
      port: 465,
      secure: true,
      auth: {
        user: testAccount.email,
        pass: testAccount.pass,
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

moduele.exports = mailSender;