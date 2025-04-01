import express from "express";
import { authAdmin, authEmployee } from "../middlewares/authMiddleware.js";
import employeeModel from "../Models/employeeModel.js";
import admin from "../Models/adminModel.js";
import teamModel from "../Models/teamModel.js";
import { checkAdmin } from "../services/admin.service.js";
import { checkEmployee } from "../services/employee.service.js";
import { validationResult } from "express-validator";

const router = express.Router();

router.post("/:adminId/create", async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { adminId } = req.params;
    const check = await checkAdmin(adminId);

    if (!check) {
      return res.status(403).json({ error: "Unauthorized: Admin not found" }); // Send response
    }

    const { name, description, createdBy, members, maxMembers, activeStatus } =
      req.body;

    // Validate required fields
    if (!name || !createdBy || !createdBy.adminId || !createdBy.adminName) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Validate members
    const validatedMembers = [];
    if (members && members.length > 0) {
      for (const member of members) {
        const isValidEmployee = await checkEmployee(member.employeeId);
        if (!isValidEmployee) {
          return res.status(400).json({
            error: `Invalid employee ID: ${member.employeeId}`,
          });
        }

        validatedMembers.push({
          employeeId: member.employeeId,
          name: {
            firstName: member.name.firstName,
            lastName: member.name.lastName,
          },
          role: member.role || "member",
          joinedAt: member.joinedAt || Date.now(),
        });
      }
    }

    // Create a new team
    const newTeam = await teamModel.create({
      name,
      description: description || "",
      createdBy: {
        adminId: createdBy.adminId,
        adminName: {
          firstName: createdBy.adminName.firstName,
          lastName: createdBy.adminName.lastName,
        },
      },
      members: validatedMembers,
      maxMembers: maxMembers || 6,
      activeStatus: activeStatus ?? true,
    });

    res.send(newTeam);
  } catch (error) {
    next(error); // Pass error to Express error handler
  }
});

// Get team data

export default router;
