const express = require("express");
const app = express();
PORT = 5050;

app.get("/", (req, res) => {
    res.send("Hello Yuu's Server");
});

app.listen(PORT, () => {
    console.log("ローカルサーバー起動中")
});