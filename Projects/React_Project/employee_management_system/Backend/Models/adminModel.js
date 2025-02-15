import mongoose from "mongoose";

// Schema
const adminData = new mongoose.Schema({
  firstName: String,
  lastName: String,
  gender: String,
  email: String,
  password: String,
});

// model
const Admin = mongoose.model("Admin", adminData);

export default Admin;
