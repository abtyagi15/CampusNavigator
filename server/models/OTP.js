const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");
const mailBody = require("../mail/templates/accountVerfication");

const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 60 * 5,
  },
});


otpSchema.pre("save",async function(next){
  const email = this.email;
  const otp = this.otp;
  await sendAccoumtVerificationMail(email,otp);
  next();
})

async function sendAccoumtVerificationMail(email,otp){
  try{
      const body = mailBody(otp);
      const title = "CampusNavigator Account Verification OTP";
      const mailResponse = await mailSender(email,title,body);
      console.log(mailResponse);

  }catch(e){
    console.error(e);
    console.log("Error in send account verification mail function");
  }
}

module.exports = mongoose.model("OTP", otpSchema);
