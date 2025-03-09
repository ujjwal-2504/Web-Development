import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import admin from "./adminModel.js";

//Schema
const employeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: [3, "First name must be at least 3 character long"],
  },
  lastName: {
    type: String,
    required: true,
    minlength: [3, "Last name must be at least 3 character long"],
  },
  gender: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  tasks: [
    {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      accepted: {
        type: Boolean,
        required: true,
      },
      newTask: {
        type: Boolean,
        required: true,
      },
      completed: {
        type: Boolean,
        required: true,
      },
      failed: {
        type: Boolean,
        required: true,
      },
      assignedBy: {
        adminName: {
          firstName: {
            type: String,
            required: true,
          },
          lastName: {
            type: String,
            required: true,
          },
        },
        admin: {
          type: Schema.Types.ObjectId,
          ref: "admin",
        },
      },
    },
  ],
  taskNumbers: {
    accepted: {
      type: Number,
      default: 0,
      min: 0,
      required: true,
    },
    newTask: {
      type: Number,
      default: 0,
      min: 0,
      required: true,
    },
    completed: {
      type: Number,
      default: 0,
      min: 0,
      required: true,
    },
    failed: {
      type: Number,
      default: 0,
      min: 0,
      required: true,
    },
  },
});

employeeSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this.id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  return token;
};

employeeSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

employeeSchema.statics.hashPassword = async function (password) {
  const salt = bcrypt.genSaltSync(10);
  return await bcrypt.hash(password, salt);
};

// model
const employeeModel = mongoose.model("Employee", employeeSchema);

export default employeeModel;
