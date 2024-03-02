const otpGenerator = () => {
    try{
        return Math.floor(100000 + Math.random() * 900000);
    }catch(e){
        console.error(e);
        console.log("Error in otp generator");
    }
}

module.exports = otpGenerator;