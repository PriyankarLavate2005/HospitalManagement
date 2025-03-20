const User = require("../Models/User");
const Patient_personal_details_model = require("../Models/Patient_Personal_Details")
// Signup
exports.signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = new User({ name, email, password });
        await user.save();
        res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.Patient_Personal_Details = async (req, res) => {
    const { name, address, pincode, age, bloodGroup, dateOfBirth, emergency_num, userId } = req.body;
  
    // Check if the user already has patient details
    let patientDetails = await Patient_personal_details_model.findOne({ userId });
  
    if (patientDetails) {
      // Update existing details
      patientDetails.name = name;
      patientDetails.address = address;
      patientDetails.pincode = pincode;
      patientDetails.age = age;
      patientDetails.bloodGroup = bloodGroup;
      patientDetails.dateOfBirth = dateOfBirth;
      patientDetails.emergency_num = emergency_num;
    } else {
      // Create new details
      patientDetails = new PersonalDetails({
        name,
        address,
        pincode,
        age,
        bloodGroup,
        dateOfBirth,
        emergency_num,
        userId,
      });
    }
  
    await patientDetails.save();
    res.send(patientDetails);
  };
        

exports.See_Patient_Personal_Details =  async (req, res) => {
    try{
    const userId = req.query.userId;
    const patientDetails = await Patient_personal_details_model.findOne({ userId }); // Fetch details for the logged-in user
    res.send(patientDetails || {});
    } 
    // Return an empty object if no details are found
    catch(e){
        res.send({message:"could not seee",e})
    }
  };


