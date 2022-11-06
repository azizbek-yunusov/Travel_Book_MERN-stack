const express = require("express");
require("dotenv").config()
const connectDB = require("./config/db")

connectDB()

const app = express();

app.get("/", (req, res) => {
  res.send("hello")
})
const PORT = process.env.PORT || 5000;

app.listen(
  5000,
  console.log(`Server listening on port: ${PORT} http://localhost:${PORT}`)
);
