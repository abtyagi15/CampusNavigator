const mongoose = require('mongoose');
require('dotenv').config();

exports.connectToDB = () => {
    mongoose.connect(process.env.DATABASE_URL).then(() => {
        console.log("Database connected successfully");
    }).catch((e) => {
        console.error(e);
        console.log("Error in connecting to the database");
    })
}

