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

const checkEmployee = async (employeeId) => {
  try {
    const response = await employeeModel.findById(employeeId);
    return response ? true : false; // Return false if no admin is found
  } catch (err) {
    console.log("Error in checking admin: ", err);
    return false; // Return false if an error occurs
  }
};

export { createEmployee, checkEmployee };
