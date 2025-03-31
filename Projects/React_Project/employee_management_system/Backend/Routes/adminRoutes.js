import express from "express";
import { body } from "express-validator";
import { authAdmin } from "../middlewares/authMiddleware.js";
import { checkAdmin } from "../services/admin.service.js";
import employeeModel from "../Models/employeeModel.js";
import {
  registerAdmin,
  loginAdmin,
  getAdminProfile,
  logoutAdmin,
} from "../controllers/admin.controller.js";

const router = express.Router();

router.post(
  "/register",
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
  registerAdmin
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  loginAdmin
);

router.get("/profile", authAdmin, getAdminProfile);

router.get("/logout", authAdmin, logoutAdmin);

router.get("/:adminId/get-all-employee", authAdmin, async (req, res, next) => {
  try {
    const { adminId } = req.params;
    const check = await checkAdmin(adminId); // Wait for the Promise to resolve

    if (!check) {
      return res.status(403).json({ error: "Unauthorized: Admin not found" }); // Send response
    }

    const employees = await employeeModel.find({}); // Fetch all employees
    res.status(200).json(employees); // Send response
  } catch (error) {
    next(error); // Pass error to Express error handler
  }
});

export default router;
