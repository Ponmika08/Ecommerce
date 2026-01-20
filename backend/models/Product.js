const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  image: String,
  new_price: Number,
  old_price: Number,
  category: String
});

module.exports = mongoose.model("Product", ProductSchema);
