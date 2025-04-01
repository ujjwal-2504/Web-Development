import express from "express";
import { authAdmin, authEmployee } from "../middlewares/authMiddleware.js";
import employeeModel from "../Models/employeeModel.js";
import { checkEmployee } from "../services/employee.service.js";

const router = express.Router();

router.patch("/accept-task", async (req, res, next) => {
  try {
    const { empId, taskId } = req.body;

    const updatedEmployee = await employeeModel.findOneAndUpdate(
      { _id: empId, "tasks._id": taskId }, // Find employee and specific task
      {
        $set: {
          "tasks.$.newTask": false,
          "tasks.$.accepted": true,
        },
        $inc: {
          "taskNumbers.accepted": 1,
          "taskNumbers.newTask": -1,
        },
      },
      { new: true } // Return updated document
    );

    if (!updatedEmployee) {
      return res.status(404).json({ message: "Employee or Task not found" });
    }

    if (updatedEmployee) {
      const updateFields = {};
      if (updatedEmployee.taskNumbers.accepted < 0)
        updateFields["taskNumbers.accepted"] = 0;
      if (updatedEmployee.taskNumbers.newTask < 0)
        updateFields["taskNumbers.newTask"] = 0;

      if (Object.keys(updateFields).length > 0) {
        await employeeModel.updateOne({ _id: empId }, { $set: updateFields });
      }
    }

    res.status(200).json({
      message: "Task updated successfully",
    });
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.patch("/completed-task", async (req, res, next) => {
  try {
    const { empId, taskId } = req.body;

    const updatedEmployee = await employeeModel.findOneAndUpdate(
      { _id: empId, "tasks._id": taskId }, // Find employee and specific task
      {
        $set: {
          "tasks.$.accepted": false,
          "tasks.$.completed": true,
        },
        $inc: {
          "taskNumbers.accepted": -1,
          "taskNumbers.completed": 1,
        },
      },
      { new: true } // Return updated document
    );

    if (!updatedEmployee) {
      return res.status(404).json({ message: "Employee or Task not found" });
    }

    if (updatedEmployee) {
      const updateFields = {};
      if (updatedEmployee.taskNumbers.accepted < 0)
        updateFields["taskNumbers.accepted"] = 0;
      if (updatedEmployee.taskNumbers.completed < 0)
        updateFields["taskNumbers.completed"] = 0;

      if (Object.keys(updateFields).length > 0) {
        await employeeModel.updateOne({ _id: empId }, { $set: updateFields });
      }
    }

    res.status(200).json({
      message: "Task updated successfully",
    });
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.patch("/failed-task", async (req, res, next) => {
  try {
    const { empId, taskId } = req.body;

    const updatedEmployee = await employeeModel.findOneAndUpdate(
      { _id: empId, "tasks._id": taskId }, // Find employee and specific task
      {
        $set: {
          "tasks.$.accepted": false,
          "tasks.$.failed": true,
        },
        $inc: {
          "taskNumbers.accepted": -1,
          "taskNumbers.failed": 1,
        },
      },
      { new: true } // Return updated document
    );

    if (!updatedEmployee) {
      return res.status(404).json({ message: "Employee or Task not found" });
    }

    if (updatedEmployee) {
      const updateFields = {};
      if (updatedEmployee.taskNumbers.accepted < 0)
        updateFields["taskNumbers.accepted"] = 0;
      if (updatedEmployee.taskNumbers.failed < 0)
        updateFields["taskNumbers.failed"] = 0;

      if (Object.keys(updateFields).length > 0) {
        await employeeModel.updateOne({ _id: empId }, { $set: updateFields });
      }
    }

    res.status(200).json({
      message: "Task updated successfully",
    });
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/all", authEmployee, async (req, res, next) => {
  try {
    const employees = await employeeModel.find({}); // Fetch all employees
    res.status(200).json(employees); // Send response
  } catch (error) {
    next(error); // Pass error to Express error handler
  }
});

export default router;
