require("dotenv").config();
const connectDB = require("./config/connectDB");
const Product = require("./models/productModel");

const ProductJson = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.DB_URL);
    await Product.deleteMany();
    await Product.create(ProductJson);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};

start();