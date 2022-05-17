import express from "express";
import morgan from "morgan";
import cors from "cors";
import "dotenv/config";

const app = express();

// config
app.set("port", process.env.PORT || 3000);
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// routes

// index route
app.get("/", (req, res) => {
  res.send("Hello World");
});

export default app;
