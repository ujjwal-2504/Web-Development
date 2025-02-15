import mongoose from "mongoose";

//Schema
const employeeData = new mongoose.Schema({
  firstName: { type: String, requried: true },
  lastName: { type: String, requried: true },
  gender: { type: String, requried: true },
  email: { type: String, requried: true, unique: true },
  password: { type: String, requried: true },
  tasks: [
    {
      title: String,
      description: String,
      date: Date,
      category: String,
      accepted: Boolean,
      newTask: Boolean,
      completed: Boolean,
      failed: Boolean,
    },
  ],
  taskNumbers: {
    accepted: Number,
    newTask: Number,
    completed: Number,
    failed: Number,
  },
});

// model
const Employee = mongoose.model("Employee", employeeData);

export default Employee;
