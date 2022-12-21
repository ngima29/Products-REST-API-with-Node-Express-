require("dotenv").config();
const express = require("express");
const app = express();
var cors = require('cors')
const connectDB = require("./config/connectDB");

const PORT = process.env.PORT || 8000;
const url = process.env.DB_URL;

const productRoute = require("./Routes/productRoute");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hi, I am live ");
});
connectDB()
// middleware or to set router
app.use("/api/products",productRoute );

app.listen(PORT, () => {
    console.log(`${PORT} Yes I am connected`);
  });

start();