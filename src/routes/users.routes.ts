import { Router } from "express";
import { getUsers, getUser, createUser } from "../controllers/users.controller";

class UserRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get("/", getUsers);
    this.router.get("/:id", getUser);
    this.router.post("/", createUser);
  }
}

const userRoutes = new UserRoutes();
export default userRoutes.router;

