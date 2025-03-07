import express, { urlencoded } from "express";
import cors from "cors";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import cookieParser from "cookie-parser";
import employeeRoutes from "./Routes/employeeRoutes.js";
import adminRoutes from "./Routes/adminRoutes.js";
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

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Why don't scientists trust atoms?",
      content: "Because they make up everything!",
    },
    {
      id: 2,
      title: "Why did the scarecrow win an award?",
      content: "Because he was outstanding in his field!",
    },
    {
      id: 3,
      title: "Why don’t skeletons fight each other?",
      content: "They don’t have the guts.",
    },
    {
      id: 4,
      title: "Why couldn’t the bicycle stand up by itself?",
      content: "Because it was two-tired!",
    },
    {
      id: 5,
      title: "What do you call fake spaghetti?",
      content: "An impasta!",
    },
  ];
  res.send(jokes);
});

app.use("/employee", employeeRoutes);
app.use("/admin", adminRoutes);
