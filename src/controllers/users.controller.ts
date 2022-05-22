import { Request, Response } from "express";
import UserModel from "../models/user";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.findByPk(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
}
