import express, {Application} from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import usersRoutes from "./routes/users.routes";

const app: Application = express();

// config
app.set("port", process.env.PORT || 3000);

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// routes
//app.use("/api/students", studentsRoutes);
app.use("/api/users", usersRoutes);

// index route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the API" });
});

export default app;
