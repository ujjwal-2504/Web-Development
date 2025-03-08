import express from "express";
import { authAdmin, authEmployee } from "../middlewares/authMiddleware.js";
import employeeModel from "../Models/employeeModel.js";

const router = express.Router();

router.post("/createTask", async (req, res, next) => {
  try {
    const { task, assignTo } = req.body;

    employeeModel.findById(assignTo).then((res) => {
      console.log(res);
    });
  } catch (error) {
    console.log(error);
  }
});

export default router;
