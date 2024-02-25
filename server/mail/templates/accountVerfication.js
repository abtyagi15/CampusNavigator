const accountVerificationOTP = (otp) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <title>OTP for account verification</title>
        <style>
            .class {
                text-align: center;
                padding: 2px;
            }
            .otp{
                font-size: 20px;
                font-weight: bold;
                color: blue;
            }
            .text-black{
                color: black;
            }
        </style>
    </head>
    <body class="text-black">
    <h1 class="center" >Welcome to CampusNavigator</h1>
    <h2 class="center" >Verify Your Email Address</h2>
    <div class="center">
        <p>Use the following code</p>
        <p class="otp" >${otp}</p>
        <p>This code is only valid for 5 minutes</p>
    </div>
    </body>`
}