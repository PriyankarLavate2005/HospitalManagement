const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const connectDB = require('./Models/DB');
const authRoutes = require('./routes/authRoutes');

const app = express();
connectDB();
app.use(cors());
app.use(express.json());

app.use("/", authRoutes);

app.listen(5000, () => {
    console.log("Server is started on port 5000");
});
