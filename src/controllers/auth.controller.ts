import { Request, Response } from "express";
import jwt from "jsonwebtoken";

import UserModel from "../models/User";
const User = UserModel;

class Auth {
  //login user
  public async signIn(req: Request, res: Response): Promise<Response> {
    try {
      // find user by email and check if password is correct
      const user = await User.findOne({
        where: {
          email: req.body.email,
          password: req.body.password,
        },
      });
      if (user) {
        // give user a token
        const token = jwt.sign(
          {
            user_id: user.user_id,
            email: user.email,
          },
          // create a secret key
          process.env.JWT_SECRET || "secret",
          {
            expiresIn: "168h",
          }
        );
        return res.status(200).json({
          token: token,
        });
      } else {
        return res.status(400).json({
          error: "user not found or password incorrect",
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
