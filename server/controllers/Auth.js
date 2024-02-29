const User = require("../models/User");
const OTP = require("../models/OTP");
const otpGenerator = require("../utils/otpGenerator");
const bcrypt = require("bcrypt");

exports.signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Account already exists with this mail id",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords and Confirm Passwords do not match",
      });
    }

    const otp = otpGenerator();

    const user = await OTP.findOne({ email: email });
    if (user) {
      user.otp = otpGenerator();
      await user.save();
    } else {
      const newOtp = new OTP({ email, otp });
      await newOtp.save();
    }

   
    return res.json({
      success: true,
      message: "OTP has been sent to your email id",
      otp: otp,
      email: email,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      status: false,
      message: "Error in the signup controller",
    });
  }
};

exports.verifyOtp = async (req, res) => {
  const { 
    firstName,
    lastName,
    email,
    password,
    otp
   } = req.body;
  const user = await OTP.findOne({ email });
  if (user.otp !== otp) {
    return res.status(400).json({
      success: false,
      message: "Invalid OTP entered. Please try again"
    });
    
  }
  await OTP.findOneAndDelete({ email });
  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  return res.json({
    success: true,
    message: "Account created successfully",
  });

};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if(!email || !password){
      return res.json({
        success:false,
        message:"All fields are required"
      })
    }

    const user = await User.findOne({email});
    if(!user){
      return res.json({
        success:false,
        message:"Sign up first"
      })
    }
    if(!await bcrypt.compare(password,user.password)){
      return res.json({
        success:flase,
        message:"Invalid Password"
      })
    }
    return res.status(200).json({
      success:true,
      message:"Logged in successfully"
    })
  } catch (e) {
    console.error(e);
    res.status(500).json({
      status: false,
      message: "Error in the login controller",
    });
  }
};
