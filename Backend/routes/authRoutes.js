const express = require("express");
const authController = require("../routes/authRoutes");
const {signup,Patient_Personal_Details,See_Patient_Personal_Details}=require("../controllers/authController")

const router = express.Router();

// Signup Route
router.post("/signup", signup);

// Save Personal Details Route
router.post("/patient_personal_details",Patient_Personal_Details)

router.get('/see_patient_personal_details',See_Patient_Personal_Details)

module.exports = router;