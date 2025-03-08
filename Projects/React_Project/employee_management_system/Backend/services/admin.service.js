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

const checkAdmin = async (adminId) => {
  try {
    const response = await adminModel.findById(adminId);
    return response ? true : false; // Return false if no admin is found
  } catch (err) {
    console.log("Error in checking admin: ", err);
    return false; // Return false if an error occurs
  }
};

export { createAdmin, checkAdmin };
