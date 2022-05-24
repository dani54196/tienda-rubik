import { Request, Response } from "express";
import UserModel from "../models/User";

class UsersController {
  public async getUsers(req: Request, res: Response): Promise<Response> {
    try {
      const users = await UserModel.findAll();
      return res.status(200).json(users);
    } catch (err) {
      return res.status(500).json({
        error: err,
      });
    }
  }

  public async getUser(req: Request, res: Response): Promise<Response> {
    try {
      const user = await UserModel.findByPk(req.params.id);
      // check if user exists
      if (user == null) {
        return res.status(404).json({ message: "user not exist" });
      } else {
        return res.status(200).json(user);
      }
    } catch (err) {
      return res.status(500).json({
        error: err,
      });
    }
  }

  public async createUser(req: Request, res: Response): Promise<Response> {
    try {
      //check if mail already exist
      const mailInUse = await UserModel.findOne({
        where: {
          email: req.body.email,
        },
      });
      if (mailInUse) {
        return res.status(400).json({
          error: "email already exist",
        });
      }
      
      const user = await UserModel.create(req.body);
      return res.status(201).json(user);

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
      return res.status(202).json({ message: "User update" });
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
      return res.status(202).json({
        mesasge: "user delete",
      });
    } catch (err) {
      return res.status(500).json({
        error: err,
      });
    }
  }
}

export const usersController = new UsersController();
