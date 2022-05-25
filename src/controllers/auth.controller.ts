import { Request, Response } from "express";
import jwt from "jsonwebtoken";

import UserModel from "../models/User";
const User = UserModel

class Auth {
  //login user
  public async login(req: Request, res: Response): Promise<Response> {
    try {
      const user = await User.findOne({
        where: {
          email: req.body.email,
          password: req.body.password,
        },
      });
      if (user) {
        const token = jwt.sign(
          {
            user_id: user.user_id,
            email: user.email,
          },
          "secret",
          {
            expiresIn: "1h",
          }
        );
        return res.status(200).json({
          token: token,
        });
      } else {
        return res.status(400).json({
          error: "user not found",
        });
      }
    } catch (err) {
      return res.status(500).json({
        error: err,
      });
    }
  }

  
}

export const auth = new Auth();
