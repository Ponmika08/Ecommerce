const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect DB
connectDB();

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/products", require("./routes/product"));

app.get("/", (req, res) => {
  res.send("Ecommerce Backend Running");
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
