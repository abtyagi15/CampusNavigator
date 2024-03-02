const accountVerificationOTP = (otp) => {
  return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: 'Arial', sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f8f8f8;
          text-align: center;
        }
    
        header {
          background-color: #333;
          color: #fff;
          padding: 15px;
        }
    
        section {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }
    
       
    
        p {
          color: #333;
          font-size: 18px;
   
        }
    
        
    
        @media screen and (max-width: 600px) {
          section {
            padding: 10px;
          }
    
          p {
            font-size: 16px;
          }
        }
      </style>
      <title>Apology Webpage</title>
    </head>
    
    <body>
    
      <h1>Welcome to our app</h1>    
      <section>
        <p>Account Verification OTP</p>
        <p><strong>${otp}</strong></p>
        <p>If you did not create an account or if you have any questions, please disregard this email.</p>
      </section>
    
    </body>
    
    </html>`;
};

module.exports = accountVerificationOTP;
