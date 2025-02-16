import express from "express";
import { body } from "express-validator";
import { authAdmin } from "../middlewares/authMiddleware.js";
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

export default router;
