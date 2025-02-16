import employeeModel from "../Models/employeeModel.js";

const createEmployee = async ({
  firstName,
  lastName,
  gender,
  email,
  password,
}) => {
  if (!firstName || !lastName || !gender || !email || !password) {
    throw new Error("All fields are required");
  }

  const employeeAdded = await employeeModel.create({
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

  return employeeAdded;
};

export { createEmployee };
