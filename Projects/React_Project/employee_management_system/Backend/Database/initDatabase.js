import mongoose from "mongoose";
import data from "./data.js";
import Employee from "../Models/employeeModel.js";
import Admin from "../Models/adminModel.js";

async function main() {
  mongoose.connect("mongodb://127.0.0.1:27017/employeeManagementSystem");
}

main()
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(err));

const initDB = async () => {
  // deleting
  await Employee.deleteMany({});
  await Admin.deleteMany({});

  // inserting
  await Employee.insertMany(data.employees);
  await Admin.insertMany(data.admins);

  console.log("Data was initalized");
};

initDB();
