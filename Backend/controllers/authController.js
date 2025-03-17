const mongoose = require("mongoose");
const User = require("../Models/User");

const Signupdata = async (req, res) => {
    try {
        let user = new User(req.body);
        let result = await user.save();
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { Signupdata }; // Correctly exporting as an object
