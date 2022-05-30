import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

//verify token
export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // check if header exists
  let token: any = req.headers["auth-token"];
  if (!token) {
    return res.status(401).json({
      error: "No token provided",
    });
  }
  try {
    jwt.verify(token, process.env.JWT_SECRET || "secret");
    next();
  } catch (error) {
    res.status(401).json({
      message: "Auth failed",
    });
  }
};
