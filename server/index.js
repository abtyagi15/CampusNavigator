const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000;

const users = {
    email: "myemail@gmail.com",
    password: "mypassword"
}

app.use(express.json());

const cors = require('cors');
app.use(
    cors({
        origin: "https://newcampusnavigator.vercel.app",
        credentials: true, 
    })
)

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const user = users.email === email && users.password === password;
    console.log(email, password, user);

    if(user) {
        res.status(200).json({
            message: "Login Successful",
        })
    }
    else{
        res.status(401).json({
            message: "Invalid Credentials",
        })
    }
});

const runPredictScript = require('./prediction_ml_model/model_access_script');

app.post('/predict', (req,res) => {
    try{
        const data = req.body;
        console.log(data);

        const inputJson = JSON.stringify(data);

        runPredictScript(inputJson,(err,result)=>{
            if(err){
                console.error("The error is",err);
            }
            else{
                console.log("The result is",result);
                res.json({
                    success: true,
                    message: "Prediction done successfully",
                    result: result.prediction
                });
            }
        });
      
        console.log("This is sent by postman",data);

    }catch(e){
        console.log(e);
    }
})

app.get('/login', (req, res) => {
    res.status(200).json({
        message: "Hello World",
    })
});

app.listen(3001, () => {
    console.log(`Server is running on port ${PORT}`);
});