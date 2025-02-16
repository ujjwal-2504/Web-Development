import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Schema
const adminSchema = new mongoose.Schema({
  firstName: {
    type: String,
    requried: true,
    minlength: [3, "First name must be at least 3 character long"],
  },
  lastName: {
    type: String,
    requried: true,
    minlength: [3, "Last name must be at least 3 character long"],
  },
  gender: { type: String, requried: true },
  email: { type: String, requried: true, unique: true },
  password: { type: String, requried: true, select: false },
});

adminSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this.id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  return token;
};

adminSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

adminSchema.statics.hashPassword = async function (password) {
  const salt = bcrypt.genSaltSync(10);
  return await bcrypt.hash(password, salt);
};

// model
const admin = mongoose.model("Admin", adminSchema);

export default admin;
