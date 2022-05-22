import express, {Application} from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import indexRoutes from "./routes/index.routes";

const app: Application = express();

// config
app.set("port", process.env.PORT || 3000);

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// routes
app.use("/", indexRoutes);

export default app;
