import express from "express";
import { body } from "express-validator";
import { authEmployee } from "../middlewares/authMiddleware.js";
import employeeModel from "../Models/employeeModel.js";
import {
  newEmployee,
  loginEmployee,
  getEmployeeProfile,
  logoutEmployee,
} from "../controllers/employee.controller.js";

const router = express.Router();

router.post(
  "/new",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("firstName")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 character long"),
    body("lastName")
      .isLength({ min: 3 })
      .withMessage("Last name must be at least 3 character long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  newEmployee
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  loginEmployee
);

router.get("/profile", authEmployee, getEmployeeProfile);

router.get("/logout", authEmployee, logoutEmployee);

router.post("/createTask", async (req, res, next) => {
  try {
    const { newTask, assignTo } = req.body;

    const updatedEmp = await employeeModel.findByIdAndUpdate(
      assignTo,
      {
        $push: { tasks: newTask }, // Add new task to tasks array
        $inc: { "taskNumbers.newTask": 1 }, // Increment newTask count
      },
      { new: true } // Return updated document
    );

    if (!updatedEmp) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json({ message: "Task Created" });
  } catch (error) {
    console.log("Error during create task: ", error);
  }
});

export default router;
