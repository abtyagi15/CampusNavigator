const express = require('express');
const app = express();

const PORT = 3001;

const users = {
    email: "myemail@gmail.com",
    password: "mypassword"
}

app.use(express.json());

const cors = require('cors');
app.use(
    cors({
        origin: "http://localhost:3000",
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

app.get('/login', (req, res) => {
    res.status(200).json({
        message: "Hello World",
    })
});

app.listen(3001, () => {
    console.log(`Server is running on port ${PORT}`);
});