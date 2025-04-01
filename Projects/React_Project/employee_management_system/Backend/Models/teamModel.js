import mongoose, { Schema } from "mongoose";
import admin from "./adminModel.js";
import employeeModel from "./employeeModel.js";

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: [3, "Team name must be at least 3 characters long"],
  },
  description: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    adminId: {
      type: Schema.Types.ObjectId,
      ref: "admin",
      required: true,
    },
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
  },
  members: [
    {
      employeeId: {
        type: Schema.Types.ObjectId,
        ref: "employeeModel",
        required: true,
      },
      name: {
        firstName: {
          type: String,
          required: true,
        },
        lastName: {
          type: String,
          required: true,
        },
      },
      role: {
        type: String,
        enum: ["leader", "member"],
        default: "member",
      },
      joinedAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  maxMembers: {
    type: Number,
    default: 6,
  },
  activeStatus: {
    type: Boolean,
    default: true,
  },
});

const teamModel = mongoose.model("Team", teamSchema);

export default teamModel;
