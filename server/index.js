const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000;

const {connectToDB} = require('./config/database');
connectToDB();


app.use(express.json());

const cors = require('cors');
app.use(
    cors({
        origin: "https://newcampusnavigator.vercel.app",
        credentials: true, 
    })
)

const userRoute = require('./routes/User');
app.use('/api/v1',userRoute);

const predictRoute = require('./routes/Predict');
app.use('/api/v1',predictRoute);




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});