import { Request, Response } from "express";
import UserModel from "../models/user";

//get all users
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};
