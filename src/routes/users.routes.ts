import { Router } from "express";
import { getUsers, getUser } from "../controllers/users.controller";

class UserRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get("/", getUsers);
    this.router.get("/:id", getUser);
  }
}

const userRoutes = new UserRoutes();
export default userRoutes.router;
