const express = require("express");
const connectDB = require("./config/db")
require("dotenv").config()
const travelRotes = require("./routes/travelRoutes")

connectDB()

const app = express();

// body parser
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api/travel", travelRotes)
const PORT = process.env.PORT || 5000;

app.listen(
  5000,
  console.log(`Server listening on port: ${PORT} http://localhost:${PORT}`)
);
