const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const connectDB = require('./Models/DB');
const authRoutes = require('./routes/authRoutes');

const app = express();


connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/", authRoutes);

// Start the server
app.listen(5000, () => {
    console.log("Server is started on port 5000");
});
