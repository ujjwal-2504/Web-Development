import express from "express";
import mongoose from "mongoose";
import Employee from "../Models/employeeModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { firstName, lastName, gender, email, password } = req.body;

  try {
    const employeeAdded = await Employee.create({
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      email: email,
      password: password,
      tasks: [],
      taskNumbers: {
        accepted: 0,
        newTask: 0,
        completed: 0,
        failed: 0,
      },
    });

    res.status(201).json(employeeAdded);
  } catch (error) {
    res.status(400).json(error.error.message);
    console.log(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const showAll = await Employee.find();

    res.status(200).json(showAll);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(err);
  }
});

// get single employee
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const showAll = await Employee.findById({ _id: id });

    res.status(200).json(showAll);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error.message);
  }
});

// delete single employee
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedEmployee = await Employee.findByIdAndDelete({ _id: id });

    res.status(200).json(deletedEmployee);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error.message);
  }
});

// update single employee
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName } = req.body;

  try {
    const updateUser = await Employee.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json(updateUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error.message);
  }
});

router.get("/login", async (req, res, next) => {});

export default router;
