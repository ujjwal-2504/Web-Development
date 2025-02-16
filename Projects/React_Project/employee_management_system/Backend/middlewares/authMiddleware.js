import employeeModel from "../Models/employeeModel.js";
import blackListToken from "../Models/blackListTokenModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import adminModel from "../Models/adminModel.js";

export const authEmployee = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorize" });
  }

  const isBlackListed = await blackListToken.findOne({ token: token });

  if (isBlackListed) {
    return res.status(401).json({ message: "Unauthorize" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const employee = await employeeModel.findById(decoded._id);

    req.employee = employee;
    return next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorize" });
  }
};

export const authAdmin = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorize" });
  }

  const isBlackListed = await blackListToken.findOne({ token: token });

  if (isBlackListed) {
    return res.status(401).json({ message: "Unauthorize" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await adminModel.findById(decoded._id);

    req.admin = admin;
    return next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorize" });
  }
};
