import { Request, Response } from "express";
import { db } from "../db";

export const getAllStudents = async (req: Request, res: Response) => {
  const students = await db.query("SELECT * FROM student");
  res.json(students);
};
