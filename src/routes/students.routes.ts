import { Router } from "express";
const router = Router();

import { getAllStudents } from "../controllers/students.controller";

router.get("/", getAllStudents);

export default router;
