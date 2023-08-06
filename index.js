// Basic Working of Mongoose

// Import Mongoose
import mongoose from "mongoose";

// Connection URL
mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");

// Create a schema or structure for data
// Here fruitSchema is an object
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

// Create Mongoose Model
const Fruit = mongoose.model("Fruits", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 5,
  review: "Very good",
});

// Save the model to MongoDB database using save() method
fruit.save();

