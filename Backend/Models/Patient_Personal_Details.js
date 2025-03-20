const mongoose = require('mongoose');

const personalDetailsSchema = new mongoose.Schema({
  name: String,
  address: String,
  pincode: String,
  age: Number,
  bloodGroup: String,
  dateOfBirth: Date,
  emergency_num: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to the user
});

const PersonalDetails = mongoose.model('PersonalDetails', personalDetailsSchema);

module.exports = PersonalDetails;