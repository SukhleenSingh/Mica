const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  status: { type: String, default: 'Pending' },
  kycId: { type: String, unique: true, default: () => 'KYC-' + Date.now() + '-' + Math.floor(Math.random() * 1000)}, 
}, { timestamps: true });



module.exports = mongoose.model("User", UserSchema);
