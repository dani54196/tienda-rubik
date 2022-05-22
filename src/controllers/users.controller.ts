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

  public async updateUser(req: Request, res: Response): Promise<Response> {
    try {
      const userUpdate = await UserModel.update(req.body, {
        where: {
          user_id: req.params.id,
        },
      });
      return res.json({ "user update": "ok" });
    } catch (err) {
      return res.status(500).json({
        error: err,
      });
    }
  }

  public async deleteUser(req: Request, res: Response): Promise<Response> {
    try {
      const userDelete = await UserModel.destroy({
        where: {
          user_id: req.params.id,
        },
      });
      return res.json({ "user delete": "ok" });
    } catch (err) {
      return res.status(500).json({
        error: err,
      });
    }
  }
}

export const usersController = new UsersController();
