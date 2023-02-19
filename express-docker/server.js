const express = require("express");
const mongoose = require("mongoose");
const mongoDB = require("./src/v1/DB/mongoDB");
const cors = require("cors");
const app = express();
const PORT = 6001;
require("dotenv").config();

app.use(express.json());
app.use("/api/v1", require("./src/v1/routes/auth"));
app.use(
    cors({
        origin: "http://localhost:3000", 
    })
);

mongoDB.connect();

app.listen(PORT, () => {
    console.log("ローカルサーバー起動中")
});