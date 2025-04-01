import express, { urlencoded } from "express";
import cors from "cors";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import cookieParser from "cookie-parser";
import employeeRoutes from "./Routes/employeeRoutes.js";
import adminRoutes from "./Routes/adminRoutes.js";
import tasksRoutes from "./Routes/tasksRoutes.js";
import teamRoutes from "./Routes/teamRoutes.js";
configDotenv();

// Database and server--------------------------------------------

async function main() {
  mongoose.connect(process.env.MONGO_URL);
}

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const port = process.env.PORT || 3000;

main()
  .then(() => {
    console.log("Connected to Database");
    app.listen(port, () => {
      console.log(`The server is running on port ${port}`);
    });
  })
  .catch((err) => console.log(err));

// Routes-----------------------------------------

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/employee", employeeRoutes);
app.use("/admin", adminRoutes);
app.use("/task", tasksRoutes);
app.use("/team", teamRoutes);
