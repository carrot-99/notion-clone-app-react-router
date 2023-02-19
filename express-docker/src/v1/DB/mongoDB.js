require("dotenv").config();
const mongoose = require("mongoose");

exports.connect = () => {
    try {
        mongoose.connect(process.env.MONGODB_URL);
        console.log("DB接続中");
    } catch (error) {
        console.log(error);
    }
}