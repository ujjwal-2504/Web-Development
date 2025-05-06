import express from "express";
import { authAdmin, authEmployee } from "../middlewares/authMiddleware.js";
import employeeModel from "../Models/employeeModel.js";
import admin from "../Models/adminModel.js";
import teamModel from "../Models/teamModel.js";
import { checkAdmin } from "../services/admin.service.js";
import { checkEmployee } from "../services/employee.service.js";
import { validationResult } from "express-validator";

const router = express.Router();

router.post("/create", authAdmin, async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
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

// Get team data for admin
router.get("/admin/get-all", authAdmin, async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const allTeams = await teamModel.find({});

    res.status(200).json(allTeams);
  } catch (error) {
    next(error);
  }
});

// Get team data for employee
router.get("/employee/get-all", authEmployee, async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const allTeams = await teamModel.find({});

    res.status(200).json(allTeams);
  } catch (error) {
    next(error);
  }
});

// add team members
router.patch("/:teamId/add", authAdmin, async (req, res, next) => {
  try {
    const { teamId } = req.params;
    const { employeeId, name, role, joinedAt } = req.body;

    if (!employeeId || !name || !role || !joinedAt) {
      return res.status(400).json({ error: "Some fields are empty" });
    }

    if (!checkEmployee(employeeId)) {
      return res.status(404).json({ error: "Employee not found" });
    }

    const teamExist = await teamModel.findById(teamId);

    if (!teamExist) {
      return res.status(404).json({ error: "Team not found" });
    }

    const { _id } = req.admin;
    if (_id != teamExist.createdBy.adminId) {
      return res.status(401).json({
        error: "You don't have permission to add Employee to the team",
      });
    }

    if (teamExist.maxMembers <= teamExist.members.length) {
      return res
        .status(409)
        .json({ error: "Team is full, max member reached" });
    }

    // Create new member object
    const newMember = {
      employeeId,
      name,
      role,
      joinedAt: joinedAt || new Date(),
    };

    // Add member to team
    teamExist.members.push(newMember);
    await teamExist.save();

    return res.status(200).json({
      message: "Member added successfully",
      team: teamExist,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
