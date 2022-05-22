import { Request, Response } from "express";
import UserModel from "../models/User";

class UsersController {

  public async getUsers(req: Request, res: Response): Promise<Response> {
    try {
      const users = await UserModel.findAll();
      return res.json(users);
    } catch (err) {
      return res.status(500).json({
        error: err,
      });
    }
  }

  public async getUser(req: Request, res: Response): Promise<Response> {
    try {
      const user = await UserModel.findByPk(req.params.id);
      return res.json(user);
    } catch (err) {
      return res.status(500).json({
        error: err,
      });
    }
  }

  public async createUser(req: Request, res: Response): Promise<Response> {
    try {
      const user = await UserModel.create(req.body);
      return res.json(user);
    } catch (err) {
      return res.status(500).json({
        error: err,
      });
    }
  }

}

export const usersController = new UsersController();

/*
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
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

*/
