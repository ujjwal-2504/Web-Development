import adminModel from "../Models/adminModel.js";

const createAdmin = async ({
  firstName,
  lastName,
  gender,
  email,
  password,
}) => {
  if (!firstName || !lastName || !gender || !email || !password) {
    throw new Error("All fields are required");
  }

  const admin = await adminModel.create({
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    email: email,
    password: password,
  });

  return admin;
};

export { createAdmin };
