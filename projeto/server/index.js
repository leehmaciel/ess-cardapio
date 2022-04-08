const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "cardapio",
});

app.get("/", (req, res) => {
    res.send("I'm here");
});

app.listen(5000, () => {
    console.log("Server running!");
});