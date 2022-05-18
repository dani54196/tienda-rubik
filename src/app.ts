import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import studentsRoutes from "./routes/students.routes";
const app = express();

// config
app.set("port", process.env.PORT || 3000);
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// routes
app.use("/api/students", studentsRoutes);

// index route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the API" });
});

export default app;
