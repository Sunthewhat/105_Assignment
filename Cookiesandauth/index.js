const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cookieParse = require("cookie-parser");
const port = 3000;
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

const connection = mysql.createConnection({
  host: "server2.bsthun.com",
  port: "6105",
  user: "lab_16jhkx",
  password: "SqJj6le5ZWS61lTQ",
  database: "lab_todo02_165fzzc",
});
dotenv.config();
connection.connect();
global.connection = connection;

console.log("Database is connected");
app.use(bodyParser.json({ type: "application/json" }));
app.use(cookieParser());

app.post("/", require("./endpoints/helloWorld.js"));
app.post("/basic/login", require("./endpoints/basic_login.js"));
app.post("/login", require("./endpoints/login.js"));
app.post("/cookie/login", require("./endpoints/cookies_login.js"));
app.post("/register", require("./endpoints/register.js"));
app.get("/todo/all", require("./endpoints/todo_all.js"));
app.get("/check/login", require("./endpoints/check_login.js"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
